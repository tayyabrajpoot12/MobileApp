import React, { useState } from "react";
import { Text, View, ScrollView, StyleSheet, Image, Touchable, TouchableOpacityComponent } from "react-native";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { AsyncStorage } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TextInput, IconButton, Button } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
 



export default function Login() {








  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      Email: '',
      Password: '',
    }
  });


  const navigation = useNavigation();
  const onSubmit = async (data) => {

    reset();
    let resp = await axios.post('http://192.168.18.72:9192/auth/login', data);

    if (resp.data) {

      AsyncStorage.setItem('user', JSON.stringify(resp.data.userFound));

      navigation.navigate("Dashboard");

    } else {
      alert('user not Exsist')
    };

  }


  let [ShowPassword, SetshowPassword] = useState(true);





  return (
    <>
      <ScrollView>
        <View>
          <Image style={{ width: '100%', marginTop: 20 }} source={require('../images/login.jpg')} />
        </View>
        <View>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                label="Email"
                variant="outlined"
                keyboardType="email-address"
                value={value}
                trailing={props => (
                  <IconButton icon={props => <Icon name="email" {...props} />} {...props} />
                )}
              />
            )}
            name="Email"
          />
          {errors.Email && <Text style={styles.text}>Email is required.</Text>}

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                keyboardType="default"
                value={value}
                variant="outlined"
                secureTextEntry={ShowPassword}
                label="Password"
                trailing={props => (
                  <IconButton onPress={()=>{SetshowPassword(!ShowPassword)}} icon={props => <Icon name={ShowPassword?  "eye": 'eye-off'} {...props} />} {...props} />
                )}
              />

            )}
            name="Password"
          />
          {errors.Password && <Text style={styles.text}>Password is required.</Text>}
          <Button title="Login" onPress={handleSubmit(onSubmit)} />

          <Text onPress={() => { navigation.navigate('Signup') }} style={{ textAlign: 'center', color: '#ff0000', marginTop: 15 }}>Or new Here?</Text>
        </View>

      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: '#000'

  },
  text: {
    color: '#FF0000'
  }

});

import React, { useState } from "react";
import { Text, View, ScrollView, StyleSheet, Image } from "react-native";
import { useForm, Controller } from "react-hook-form";
import axios from 'axios';
import { useNavigation } from "@react-navigation/native";
import { TextInput, IconButton ,Button } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";






export default function Signup() {


  let [hidePassword , setHidePassword] = useState(true);


  let navigation = useNavigation();
  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      Name: '',
      Password: '',
      Email: '',
      Address: '',
      Contect: '',

    }
  });
  const onSubmit = async (data) => {
    reset();
    navigation.navigate('Login');
    console.log(data)
    let resp = await axios.post('http://192.168.43.152:9192/auth/signup', data);
  };

  return (
    <>
      <ScrollView>
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
                  keyboardType="default"
                  value={value}
                  variant="outlined"
                  label="Name"
                  trailing={props => <Icon name="account" {...props} />}
                />
              )}
              name="Name"
            />
            {errors.Name && <Text style={styles.text}>Name is required.</Text>}

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
                  secureTextEntry={hidePassword}
                  label="Password"
                  trailing={props => (
                    <IconButton onPress={()=>{setHidePassword(!hidePassword)}} icon={props => <Icon name={hidePassword? "eye": 'eye-off'} {...props} />} {...props} />
                  )}
                />
              )}
              name="Password"
            />
            {errors.Password && <Text style={styles.text}>Password is required.</Text>}


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
                  label="Address"
                  variant="outlined"
                />
              )}
              name="Address"
            />
            {errors.Address && <Text style={styles.text}>Address is required.</Text>}

            <Controller
              control={control}
              rules={{
                maxLength: 100,
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  keyboardType="numeric"
                  onChangeText={onChange}
                  value={value}
                  variant="outlined"
                  label="Contect"
                />
              )}
              name="Contect"
            />
            {errors.Contect && <Text style={styles.text}> Contect number is required.</Text>}
            <Button title="Signup" onPress={handleSubmit(onSubmit)} />

            <Text onPress={() => { navigation.navigate('Login') }} style={{ textAlign: 'center', color: '#ff0000', marginTop: 15 }}>Or Have a account ?</Text>



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

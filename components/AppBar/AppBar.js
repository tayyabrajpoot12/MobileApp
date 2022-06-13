import React, { useState } from "react";
import {
  AppBar,
  IconButton,
  Text
} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import { useNavigation } from "@react-navigation/native";







const TopBar = () => {


  const navigation = useNavigation()
  const [visible, setVisible] = useState(false);

  const hideMenu = () => setVisible(false);

  const showMenu = () => setVisible(true);



  return <>
    <AppBar color="#000"
      style={{ height: 70 }}
      title="Mobile App"
    trailing={props => (
      <IconButton
        icon={props => <Icon name="menu" {...props} onPress={showMenu} />}
        {...props}
      />
    )}
    />

    <Menu
      visible={visible}
      onRequestClose={hideMenu}
      style={{marginLeft:225}}
    >
      <MenuItem onPress={()=>{navigation.navigate('Home')}}>Home</MenuItem>
      <MenuItem onPress={()=>{navigation.navigate('Signup')}}>Signup</MenuItem>
      <MenuItem onPress={()=>{navigation.navigate('Login')}}>Login</MenuItem>
    </Menu>

  </>

};

export default TopBar;
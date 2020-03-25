import React from 'react'
import {View, Text , StyleSheet, Button, Alert, TextInput} from 'react-native' //para moviles

function AppLayout(props){ // PROPS CLASE PRINCIPAL 
    return(
        <View style={misEstilos.container}>
            <Text>{props.saludo} </Text>
            <Text>Usuario: {props.user}</Text>
            <Text>Contraseña: {props.pass}</Text>
            <TextInput placeholder='Escriba algo'/>
            <Button title='Mostrar mensaje' 
                      onPress={()=> Alert.alert('Bienvenido')} />
        </View>

    ); /// por que hay una funcion 
}

const misEstilos=StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink'
        
        
    }

});

export default AppLayout
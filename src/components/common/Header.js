import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

import { useNavigation } from '@react-navigation/native';



const Header = ({ name, showBack = true, leftIcon = null }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            {showBack ?
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.icon}>Edit</Text>
                </TouchableOpacity>
                :
                leftIcon
            }
            <Text style={styles.head1}>{name}</Text>

            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.icon}>Delete</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        justifyContent: "space-between",
        backgroundColor: "#0EB2BF"
    },
    icon: {
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold"
    },
    head1: {
        fontSize: 30,
        color: "#fff",
        fontWeight: "bold"
    }
})

export default Header;
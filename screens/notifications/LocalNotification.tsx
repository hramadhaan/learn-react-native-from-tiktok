import React, { useCallback, useEffect } from 'react'
import { View, Text, StyleSheet, Button, Platform } from 'react-native'
import notifee, { AuthorizationStatus } from '@notifee/react-native'

interface IProps {

}

const LocalNotification: React.FC<IProps> = (props) => {
    const requestPermission = useCallback(async () => {
        try {
            await notifee.requestPermission()
        } catch (err) {
            console.log(err);
        }
    }, [])

    useEffect(() => {
        requestPermission()
    }, [])

    const showNotification = useCallback(async () => {
        await notifee.displayNotification({
            title: 'Notification Title',
            body: 'Main body content of the notification',

        })
    }, [])

    return (
        <View style={styles.container}>
            <Button title='Show Notification' onPress={() => { showNotification() }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default LocalNotification
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ContactsScreen() {
  const contacts = [
    { 
      type: 'Email',
      value:'jerichozaleta@gmail.com',
      icon: 'mail',
      action: () => Linking.openURL('mailto:jerichozaleta@gmail.com')
    },
    {
      type: 'Phone',
      value: '09107368238',
      icon: 'call',
      action: () => Linking.openURL('+639107368238')
    },
    {
      type: 'Twitter',
      value: '@crimsonzz0',
      icon: 'logo-twitter',
      action: () => Linking.openURL('https://x.com/crimsonzz0')
    }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Contact Me</Text>
      
      <Text style={styles.subtitle}>
        Feel free to reach out through any of these channels:
      </Text>

      {contacts.map((contact, index) => (
        <TouchableOpacity
          key={index}
          style={styles.contactItem}
          onPress={contact.action}
        >
          <View style={styles.iconContainer}>
            <Ionicons name={contact.icon} size={24} color="#1DA1F2" />
          </View>
          <View style={styles.contactDetails}>
            <Text style={styles.contactType}>{contact.type}</Text>
            <Text style={styles.contactValue}>{contact.value}</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#8899A6" />
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 16,
    color: '#8899A6',
    marginBottom: 30,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#192734',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  iconContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#253341',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contactDetails: {
    flex: 1,
    marginLeft: 15,
  },
  contactType: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  contactValue: {
    fontSize: 14,
    color: '#1DA1F2',
    marginTop: 2,
  },
});

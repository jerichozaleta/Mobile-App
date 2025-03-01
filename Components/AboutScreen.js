import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.heading}>About Me</Text>
        <Text style={styles.text}>
          Hello! I'm Jericho D. Zaleta taking Bachelor Science Computer Science and I want to be a web and mobile developer.
        </Text>
        
        <Text style={styles.subheading}>Experience</Text>
        <Text style={styles.text}>
          • Senior Mobile Developer at Tech Corp (2020-Present){'\n'}
          • Mobile Developer at App Studio (2018-2020){'\n'}
          • Junior Developer at Start Up Inc (2017-2018)
        </Text>
        
        <Text style={styles.subheading}>Philosophy</Text>
        <Text style={styles.text}>
          I believe in creating user-centric applications that not only look beautiful
          but also provide real value to users. My approach combines technical expertise
          with creative problem-solving.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  content: {
    padding: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  subheading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1DA1F2',
    marginTop: 20,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#8899A6',
    lineHeight: 24,
    marginBottom: 15,
  },
});

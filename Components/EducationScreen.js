import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function EducationScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.heading}>Education</Text>
        
        
        <View style={styles.educationItem}>
          <Ionicons name="school" size={24} color="#1DA1F2" />
          <View style={styles.eduDetails}>
            <Text style={styles.degree}>Junior High School</Text>
            <Text style={styles.year}>2016 - 2020</Text>
          </View>
        </View>
        
        <View style={styles.educationItem}>
          <Ionicons name="school" size={24} color="#1DA1F2" />
          <View style={styles.eduDetails}>
            <Text style={styles.degree}>Senior High School</Text>
            <Text style={styles.school}>Camarines Sur National High School</Text>
            <Text style={styles.year}>2020 - 2022</Text>
          </View>
        </View>

        <View style={styles.educationItem}>
          <Ionicons name="school" size={24} color="#1DA1F2" />
          <View style={styles.eduDetails}>
            <Text style={styles.degree}>Bachelor of Computer Science</Text>
            <Text style={styles.school}>3rd Year</Text>
            <Text style={styles.year}>2022 - 2025</Text>
          </View>
        </View>



        {/* <Text style={styles.subheading}>Certifications</Text>
        <View style={styles.certificationItem}>
          <Ionicons name="ribbon" size={24} color="#1DA1F2" />
          <Text style={styles.certification}>AWS Certified Developer</Text>
        </View>
        <View style={styles.certificationItem}>
          <Ionicons name="ribbon" size={24} color="#1DA1F2" />
          <Text style={styles.certification}>Google Certified Mobile Developer</Text>
        </View> */}
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
    marginBottom: 30,
  },
  educationItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 30,
  },
  eduDetails: {
    marginLeft: 15,
  },
  degree: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  school: {
    fontSize: 16,
    color: '#1DA1F2',
    marginTop: 5,
  },
  year: {
    fontSize: 14,
    color: '#8899A6',
    marginTop: 5,
  },
  subheading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
    marginBottom: 20,
  },
  certificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  certification: {
    fontSize: 16,
    color: '#8899A6',
    marginLeft: 15,
  },
});

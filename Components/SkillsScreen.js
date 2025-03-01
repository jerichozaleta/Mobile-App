import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function SkillsScreen() {
  const skills = {
    'Programming Languages': [
      { name: 'JavaScript', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'Java', level: 75 },
    ],
    'Frameworks': [
      { name: 'React Native', level: 95 },
      { name: 'React.js', level: 90 },
      { name: 'Node.js', level: 85 },
    ],
    'Tools': [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 80 },
      { name: 'AWS', level: 75 },
    ],
  };

  const SkillBar = ({ name, level }) => (
    <View style={styles.skillBar}>
      <Text style={styles.skillName}>{name}</Text>
      <View style={styles.barContainer}>
      <View style={[styles.bar, { width: `${level}%` }]} />
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.heading}>Technical Skills</Text>
        
        {Object.entries(skills).map(([category, skillList]) => (
          <View key={category} style={styles.categoryContainer}>
            <Text style={styles.categoryTitle}>{category}</Text>
            {skillList.map((skill, index) => (
              <SkillBar key={index} name={skill.name} level={skill.level} />
            ))}
          </View>
        ))}
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
  categoryContainer: {
    marginBottom: 30,
  },
  categoryTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1DA1F2',
    marginBottom: 15,
  },
  skillBar: {
    marginBottom: 15,
  },
  skillName: {
    fontSize: 16,
    color: 'white',
    marginBottom: 5,
  },
  barContainer: {
    height: 10,
    backgroundColor: '#253341',
    borderRadius: 5,
    overflow: 'hidden',
  },
  bar: {
    height: '100%',
    backgroundColor: '#1DA1F2',
    borderRadius: 5,
  },
});
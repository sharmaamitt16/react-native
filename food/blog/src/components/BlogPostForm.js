import React, {useContext, useState} from 'react';
import { View, Text, StyleSheet, TextInput, Button} from 'react-native';

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View style={styles.row}>
      <Text style={styles.label}>Enter Title: </Text>
      <TextInput value={title} onChangeText={text => setTitle(text)} style={styles.input}></TextInput>

      <Text style={styles.label}>Enter Content: </Text>
      <TextInput value={content} onChangeText={content => setContent(content)} style={styles.input}></TextInput>

      <Button
        title="Save"
        onPress={() => onSubmit(title, content)}
      ></Button>
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: ''
  }
};

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 20
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
    marginBottom: 10
  },
  label: {
    fontSize: 20,
    marginBottom: 10
  }
});

export default BlogPostForm;

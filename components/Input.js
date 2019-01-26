// app/components/Input.js
import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { inputPlaceholder } from '../utils/Colors';
const Input = ({ inputValue, onChangeText, onDoneAddItem }) => (
  <TextInput
    style={styles.input}
    value={inputValue}
    // the value of the text input. By default, it will be an empty string since we are using the local state to set it. As the state updates, the value of the text input updates.
    onChangeText={onChangeText}
    // a callback that is called when the text input's text changes. Changed text is passed as an argument to the callback handler.
    placeholder="Type here to add note."
    // just like in HTML, placeholder is to define a default message in the input field indicating as if what is expected.
    placeholderTextColor={inputPlaceholder}
    // the custom text color of the placeholder string.
    multiline={true}
    // if true, the text input can be multiple lines. Like we have set in above.
    autoCapitalize="sentences"
    // to automatically capitalize certain characters. We are passing sentences as the default value. This means, every new sentence will automatically have its first character capitalized.
    underlineColorAndroid="transparent"
    // works only with android. It prompts sets a bottom border or an underline.
    selectionColor={"white"}
    maxLength={30}
    // define the maximum number of characters that you can allow
    returnKeyType="done"
    // determines how the return key on the device's keyboard should look
    autoCorrect={false}
    blurOnSubmit={true}
    // In case of multiline TextInput field, this behaves as when pressing return key, it will blur the field and trigger the onSubmitEditing event instead of inserting a newline into the field.
    onSubmitEditing={onDoneAddItem}
  />
);
const styles = StyleSheet.create({
    input: {
        paddingTop: 10,
        paddingRight: 15,
        fontSize: 34,
        color: 'white',
        fontWeight: '500'
    }
});
export default Input;
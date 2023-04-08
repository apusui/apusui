# Text fields

The `TextField` component is a user-editable text field. It will be used for the user to enter data that the application can read. It is a component equivalent to `<input>`. However, the `TextField` component has many features, such as **validations**, **error messages**, and a nicer **appearance**.

## Basic usage

First, we import the componente need to use.

```ts
import '@apusui/components/lib/TextField/TextField.ts'
```

**HTML**

```html
<apus-text-field label="username"></apus-text-field>
```

## Appearance

The `appearance` property of a custom `text-field` component is used to control the visual appearance of the text field. The value of the appearance property can be a string that specifies a predefined appearance for the text field, such as `regular`, `outlined`, or `filled`. It can also be a custom style class applied to the text field to control its appearance.

```html
<apus-text-field appearance="regular" label="Regular"></apus-text-field>

<apus-text-field appearance="filled" label="Filled"></apus-text-field>

<apus-text-field appearance="outlined" label="Outlined"></apus-text-field>
```

## Custom color

Optionally, you can change a text field to any color from the Material Design palette or in hexadecimal or CSS-compatible format. Here are some examples:

```html
<apus-text-field label="username" color="green-darken-3"></apus-text-field>

<apus-text-field label="username" color="#698AE1"></apus-text-field>

<apus-text-field label="username" color="rgba(163, 105, 225)"></apus-text-field>
```

## Rounded

The `rounded` property of a custom TextField component is used to control whether or not the edges of the text field should be rounded.

**Example**

```html{5}
<apus-text-field
  appearance="regular"
  label="Regular"
  value="Hey!"
  rounded
></apus-text-field>
```

## Focused

The "focused" property of a custom TextField component is used to control whether or not the text field is focused.

**Example**

```html
<apus-text-field label="First name" focused></apus-text-field>
```

## Disable & Readonly

These properties `disabled` & `readonly` are useful when we want to disable or make the text field read-only and prevent users from changing its value.

```html
<!-- Regular disable -->
<apus-text-field appearance="regular" label="Regular" disable></apus-text-field>

<!-- Outlined read-only -->
<apus-text-field appearance="outlined" label="Regular" readonly></apus-text-field>
```

## Default validations

Validations in a custom `text-field` component are rules that are used to ensure that the value of the text field is valid. For example, a validation can ensure that the text field is not empty, that the value is an integer, or that it meets certain format criteria (for example, a valid email address). Below is a list of available rules:

- `required`: Specifies whether a form field needs to be completed before the form is submitted.
- `minLength` & `maxLength`: Specifies the minimum and maximum length of a text string.
- `min` & `max`: Specifies the minimum and maximum values for numeric input types.
- `email`: Specifies that the field will be valid when the text string matches the pattern of an email.
- `pattern`: Specifies a regular expression that defines a pattern that the input data should follow. For example: validate a password.

:::info
The validations made to the text fields follow the guidelines by MDN. For more information visit the following link: [Validation Forms](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#using_built-in_form_validation)
:::

**Example 1: Required**

```html
<apus-text-field
  label="fullname"
  appearance="outlined"
  rules="required"
></apus-text-field>
```

**Example 2: Required & Email**

```html
<apus-text-field
  label="email"
  rules="required|email"
></apus-text-field>
```

**Example 3: Required & Min & Max**

```html
<apus-text-field
  label="ammount"
  type="number"
  rules="required|min:500|max:15000"
></apus-text-field>
```

As you can see, these examples only validate the text fields, but at no time is feedback given to the user as to why the error occurred. In order to display the message, go to the section: [Error messages](/components/text-fields#error-messages)

## Custom validations

Unlike default validations, such as length (`minLength` and `maxLength`) or `pattern` validations, custom validations allow developers to create specific validation rules to suit the needs of their application.

These rules can include anything from validating the format of a phone number to checking if an email already exists in the database. If the entered data does not meet a custom validation rule, a feedback message is displayed to the user to inform them of the error and help them correct it.

**Example**: In this example we will make an http request to a server to check the existence of an email, if the email already exists we will show an error message, otherwise, the validation will be completed.

```ts
// Define validation
const validation = {
  name: 'verifyEmail',
  handler: async ($node) => {
    const value = $node.target.value

    const res = await fetch(...)

    const data = await res.json()

    if (data.result) {
      return { status: 'invalid', message: 'Your email already exist.' }
    }

    return { status: 'completed' }
  }
}

// Register validation
$input.validators.push(validation)
```

## Error messages

The `error-messages` property is a property that is used to define a directory of error messages that should be displayed to the user in the component. These messages can be generated by failed validations in the component through the rules.

```html
<apus-text-field
  label="Email"
  placeholder="Example: xyz@domain.com"
  rules="required|email"
  error-messages='{
    "required": "This field is required.",
    "email": "Invalid email."
  }'
></apus-text-field>
```

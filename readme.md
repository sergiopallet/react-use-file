

<!-- [![FVCproductions](https://avatars1.githubusercontent.com/u/4284691?v=3&s=200)](http://fvcproductions.com) -->



# React-Use-File

> Simple way to manage your file states

---

## Contents 



- [Installation](#installation)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)


---

## Example 

```javascript
const fileComponent = () => {
const useFileConfig = {
    allowedExtensions: ["jpg", "png"],
    maxSizeFile: 9776799,
  };
  const { files, handleChange, resetState, errors } = useFile(useFileConfig);
  return (
    <>
      <input
        name={"name"}
        type="file"
        onChange={handleChange}
        multiple={true}
      />
      <button onClick={() => resetState()}>erase</button>
    </>
}    
```

---

## Installation

- All the `code` required to get started
- Images of what it should look like

<!-- ### Clone

- Clone this repo to your local machine using `https://github.com/fvcproductions/SOMEREPO` -->

### Setup

> install npm and bower packages

```shell
$ npm install react-use-files

```


---

## Features


## Usage 

#### Configuration props

| Prop              | Type    | Description                     |
|-------------------|---------|---------------------------------|
| allowedExtensions | String  | Allowed Extensions              |
| maxSizeFile       | Integer | Max Size allowed per file in KB |

---
## useFile hook
```javascript

const { files, handleChange, resetState, errors } = 
useFile(configuration);
```
`Files : array` 

  State with the files.

`handleChange: (<htmlFormEvent>) => void` 

Input file change event handler. This will update the files state

`resetState: () => void` 

This will erase all the data inside files state

`erros:array`

State with the files errors


<!-- ---

## Support

Reach out to me at one of the following places!

- Website at <a href="http://fvcproductions.com" target="_blank">`fvcproductions.com`</a>
- Twitter at <a href="http://twitter.com/fvcproductions" target="_blank">`@fvcproductions`</a>
- Insert more social links here.

--- -->



<!-- ## Donations (Optional)

- You could include a <a href="https://cdn.rawgit.com/gratipay/gratipay-badge/2.3.0/dist/gratipay.png" target="_blank">Gratipay</a> link as well.

[![Support via Gratipay](https://cdn.rawgit.com/gratipay/gratipay-badge/2.3.0/dist/gratipay.png)](https://gratipay.com/fvcproductions/)
--- -->

## License


- **[MIT license](http://opensource.org/licenses/mit-license.php)**

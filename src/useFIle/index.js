import { useReducer } from "react";

const validateProps = ({ maxSizeFile, allowedExtensions }) => {
  const isNumericFinit = (n) => !isNaN(parseFloat(n)) && isFinite(n);

  if (!isNumericFinit(maxSizeFile))
    throw new Error("Invalid File format on maxSizeFile config");
  if (!Array.isArray(allowedExtensions))
    throw new Error("Invalid format on allowedExtensions config");
};

const isValidFile = ({ size, name }, { allowedExtensions, maxSizeFile }) => {
  const isAllowedExtension = allowedExtensions.includes(name.split(".").pop());
  return maxSizeFile >= size && isAllowedExtension;
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_FILE":
      return {
        ...state,
        files: [...state.files, action.payload],
      };

    case "ADD_ERROR":
      return {
        ...state,
        errors: [...state.errors, action.payload],
      };

    case "RESET_STATE":
      return { ...action.payload };

    default:
      return state;
  }
}

export const useFile = (props) => {
  const inicialState = {
    files: [],
    errors: [],
  };

  const [state, dispatch] = useReducer(reducer, inicialState);

  validateProps(props);

  const setFieldErrors = (
    { size, name },
    { allowedExtensions, maxSizeFile }
  ) => {
    const errorSizeMessage = `The file ${name} é too big`;
    const ErrorExtension = `The file ${name} type isn't allowed`;
    const isAllowedExtension = allowedExtensions.includes(
      name.split(".").pop()
    );

    size > maxSizeFile &&
      dispatch({ type: "ADD_ERROR", payload: errorSizeMessage });

    !isAllowedExtension &&
      dispatch({ type: "ADD_ERROR", payload: ErrorExtension });
  };

  const createFile = (file, { result }) => {
    return {
      name: file.name,
      extension: file.name.split(".").pop(),
      value: result,
    };
  };

  const handleFiles = (files, validationProps) => {
    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();

      if (!isValidFile(files[i], validationProps)) {
        setFieldErrors(files[i], validationProps);
        continue;
      }
      reader.readAsDataURL(files[i]);
      reader.onload = () => {
        dispatch({ type: "ADD_FILE", payload: createFile(files[i], reader) });
      };
    }
  };

  const resetState = () =>
    dispatch({ type: "RESET_STATE", payload: inicialState });

  const handleChange = (event) => {
    validateProps(props);
    resetState();
    handleFiles(event.target.files, props);
  };

  return {
    ...state,
    handleChange,
    resetState,
  };
};

import * as React from 'react';
// import ReactDOM from "react-dom";
import { useForm, Controller } from 'react-hook-form';
import type {
  // NestedValue,
  // SubmitHandler,
  DefaultValues,
} from 'react-hook-form';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import mockData from './mock.json';

export type FormValues = {
  //   Native: string;
  //   TextField: string;
  //   Select: number;
  //   ReactSelect: NestedValue<{ value: string; label: string }>;
  //   Checkbox: boolean;
  //   switch: boolean;
  RadioGroup: string;
  //   MUI_Slider: NumberRange;
  //   ReactDatepicker: Date;
  //   numberFormat: number;
  //   downShift: DownshiftItem;
  //   country: NestedValue<{ code: string; label: string; phone: string }>;
};

export const defaultValues: DefaultValues<FormValues> = {
  //   Native: "",
  //   TextField: "",
  //   Select: 10,
  //   ReactSelect: { value: "vanilla", label: "Vanilla" },
  //   Checkbox: false,
  //   switch: false,
  RadioGroup: 'null',
  //   MUI_Slider: [0, 10],
  //   ReactDatepicker: new Date(),
  //   numberFormat: 123456789,
  //   downShift: "apple",
  //   country: { code: "AF", label: "Afghanistan", phone: "93" },
};

function App() {
  const {
    handleSubmit,
    register,
    reset,
    control,
    formState: { errors },
    setValue,
  } = useForm();
  const [formSubmitted, setFormSubmitted] = React.useState(false);
  const onSubmit = (data: any) => {
    // alert(JSON.stringify(data));
    console.log('Submitted Data:', data);
    setFormSubmitted(true);
  };
  // renderCount++;

  console.log(errors);

  return (
    <section style={{ margin: 'auto', textAlign: 'center' }}>
      {' '}
      {formSubmitted && <div>Submitted Successfully</div>}
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="container">
          {mockData.radioFields.map((radioField, i) => {
            return (
              <section key={`${i}-${radioField.id}`}>
                <Controller
                  name={`RadioGroup-${i}`}
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Gender is required' }}
                  render={({ field, fieldState }) => (
                    <>
                      {' '}
                      {console.log('field1', field)}
                      <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">
                          {radioField.question}
                        </FormLabel>
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          // defaultValue="female"
                          // value="female"
                          name="radio-buttons-group"
                          onChange={(e) => {
                            console.log(
                              'eeeee1',
                              e.target.value,
                              '---\n',
                              radioField.id
                            );
                            setValue(field.name, e.target.value, {
                              shouldValidate: true,
                              shouldDirty: true,
                            });
                          }}
                        >
                          {radioField.options.map((option, i) => {
                            return (
                              <div
                                style={{ display: 'flex' }}
                                key={`${option.value}-${i}`}
                              >
                                <div>
                                  {formSubmitted &&
                                    radioField.answer.id === option.id && (
                                      <>
                                        {' '}
                                        <CheckCircleIcon />
                                      </>
                                    )}
                                </div>
                                <FormControlLabel
                                  value={option.id}
                                  control={<Radio />}
                                  label={option.value}
                                />
                              </div>
                            );
                          })}
                        </RadioGroup>
                      </FormControl>
                      {fieldState.error && (
                        <p style={{ color: 'red' }}>
                          {fieldState?.error?.message}
                        </p>
                      )}
                    </>
                  )}
                />
              </section>
            );
          })}
        </div>
        {!formSubmitted && <button> submit</button>}
      </form>
    </section>
  );
}

export default App;

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

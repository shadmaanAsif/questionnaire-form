// "use client";
// // export default function Page() {
// //   return <h1>Hello, Home page222!</h1>;
// // }
// import * as React from "react";
// // import ReactDOM from "react-dom";
// import { useForm, Controller } from "react-hook-form";
// import type {
//   // NestedValue,
//   // SubmitHandler,
//   DefaultValues,
// } from "react-hook-form";
// import Radio from "@mui/material/Radio";
// import RadioGroup from "@mui/material/RadioGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import FormControl from "@mui/material/FormControl";
// import FormLabel from "@mui/material/FormLabel";
// // import Header from "./Header";

// // import NumberFormat from "react-number-format";
// // import ReactSelect from "react-select";
// // import {
// //   TextField,
// //   Checkbox,
// //   Select,
// //   MenuItem,
// //   Switch,
// //   RadioGroup,
// //   FormControlLabel,
// //   ThemeProvider,
// //   Radio,
// //   createMuiTheme,
// //   Slider,
// // } from "@material-ui/core";
// // import MuiAutoComplete from "./MuiAutoComplete";
// // import ButtonsResult from "./ButtonsResult";
// // import DownShift from "./DownShift";
// // import type { Item as DownshiftItem } from "./DownShift";
// // import "react-datepicker/dist/react-datepicker.css";

// // import "./styles.css";

// let renderCount = 0;

// // const theme = createMuiTheme({
// //   palette: {
// //     type: "dark",
// //   },
// // });

// // const radioGroupOptions = ["female", "male"] as const;

// // type RadioGroupOption = (typeof radioGroupOptions)[number];
// // type NumberRange = [number, number];

// export type FormValues = {
//   //   Native: string;
//   //   TextField: string;
//   //   Select: number;
//   //   ReactSelect: NestedValue<{ value: string; label: string }>;
//   //   Checkbox: boolean;
//   //   switch: boolean;
//   RadioGroup: string;
//   //   MUI_Slider: NumberRange;
//   //   ReactDatepicker: Date;
//   //   numberFormat: number;
//   //   downShift: DownshiftItem;
//   //   country: NestedValue<{ code: string; label: string; phone: string }>;
// };

// export const defaultValues: DefaultValues<FormValues> = {
//   //   Native: "",
//   //   TextField: "",
//   //   Select: 10,
//   //   ReactSelect: { value: "vanilla", label: "Vanilla" },
//   //   Checkbox: false,
//   //   switch: false,
//   RadioGroup: "null",
//   //   MUI_Slider: [0, 10],
//   //   ReactDatepicker: new Date(),
//   //   numberFormat: 123456789,
//   //   downShift: "apple",
//   //   country: { code: "AF", label: "Afghanistan", phone: "93" },
// };

// function App() {
//   const {
//     handleSubmit,
//     register,
//     reset,
//     control,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => alert(JSON.stringify(data));
//   // renderCount++;

//   console.log(errors);

//   return (
//     // <ThemeProvider theme={theme}>
//     <form onSubmit={handleSubmit(onSubmit)} className="form">
//       {/* <h1
//           renderCount={renderCount}
//           description="Components that are using Controller. Render count indicate how many re-renders triggered during user interaction at the form level."
//         /> */}
//       <div className="container">
//         {/* <section>
//             <label>Native Input:</label>
//             <input {...register("Native")} className="input" />
//           </section> */}

//         {/* <section>
//             <label>MUI Checkbox1</label>
//             <Controller
//               name="Checkbox"
//               control={control}
//               render={({ field }) => <Checkbox {...field} />}
//             />
//           </section> */}

//         <section>
//           <label>Radio Group</label>
//           {/* <Controller
//               render={({ field }) => (
//                 <RadioGroup aria-label="gender" {...field} required>
//                   <FormControlLabel
//                     value="female"
//                     control={<Radio />}
//                     label="Female"
//                   />
//                   <FormControlLabel
//                     value="male"
//                     control={<Radio />}
//                     label="Male"
//                   />
//                 </RadioGroup>
//               )}
//               name="RadioGroup"
//               control={control}
//             /> */}
//           {/* <RadioGroup aria-label="gender" {...field}>
//                     <FormControlLabel
//                       value="female"
//                       control={<Radio />}
//                       label="Female"
//                     />
//                     <FormControlLabel
//                       value="male"
//                       control={<Radio />}
//                       label="Male"
//                     />
//                   </RadioGroup> */}
//           <Controller
//             name="RadioGroup"
//             control={control}
//             defaultValue=""
//             rules={{ required: "Gender is required" }}
//             render={({ field, fieldState }) => (
//               <>
//                 {/* <FormControl>
//                   <FormLabel id="demo-radio-buttons-group-label">
//                     Gender
//                   </FormLabel>
//                   <RadioGroup
//                     aria-labelledby="demo-radio-buttons-group-label"
//                     // defaultValue="female"
//                     name="radio-buttons-group"
//                   >
//                     <FormControlLabel
//                       value="female"
//                       control={<Radio />}
//                       label="Female"
//                     />
//                     <FormControlLabel
//                       value="male"
//                       control={<Radio />}
//                       label="Male"
//                     />
//                     <FormControlLabel
//                       value="other"
//                       control={<Radio />}
//                       label="Other"
//                     />
//                   </RadioGroup>
//                 </FormControl> */}
//                 <RadioGroup aria-label="gender" {...field}>
//                   <FormControlLabel
//                     value="female"
//                     control={<Radio />}
//                     label="Female"
//                   />
//                   <FormControlLabel
//                     value="male"
//                     control={<Radio />}
//                     label="Male"
//                   />
//                 </RadioGroup>
//                 {fieldState.error && (
//                   <p style={{ color: "red" }}>{fieldState?.error?.message}</p>
//                 )}
//               </>
//             )}
//           />
//         </section>

//         {/* <section>
//             <label>MUI TextField</label>
//             <Controller
//               render={({ field }) => <TextField {...field} />}
//               name="TextField"
//               control={control}
//             />
//           </section> */}

//         {/* <section>
//             <label>MUI Select</label>
//             <Controller
//               render={({ field }) => (
//                 <Select {...field}>
//                   <MenuItem value={10}>Ten</MenuItem>
//                   <MenuItem value={20}>Twenty</MenuItem>
//                   <MenuItem value={30}>Thirty</MenuItem>
//                 </Select>
//               )}
//               name="Select"
//               control={control}
//             />
//           </section> */}

//         {/* <section>
//             <label>MUI Switch</label>
//             <Controller
//               name="switch"
//               control={control}
//               render={({ field }) => <Switch {...field} />}
//             />
//           </section> */}

//         {/* <section>
//             <label>MUI Slider</label>
//             <Controller
//               name="MUI_Slider"
//               control={control}
//               defaultValue={[0, 10]}
//               render={({ field }) => (
//                 <Slider
//                   {...field}
//                   onChange={(_, value) => {
//                     field.onChange(value);
//                   }}
//                   valueLabelDisplay="auto"
//                   max={10}
//                   step={1}
//                 />
//               )}
//             />
//           </section> */}

//         {/* <section>
//             <label>MUI autocomplete</label>
//             <MuiAutoComplete control={control} />
//           </section> */}

//         {/* <section>
//             <label>React Select</label>
//             <Controller
//               render={({ field }) => (
//                 <ReactSelect
//                   {...field}
//                   options={[
//                     { value: "chocolate", label: "Chocolate" },
//                     { value: "strawberry", label: "Strawberry" },
//                     { value: "vanilla", label: "Vanilla" },
//                   ]}
//                   isClearable
//                 />
//               )}
//               name="ReactSelect"
//               control={control}
//             />
//           </section> */}

//         {/* <section>
//             <label>NumberFormat</label>
//             <Controller
//               render={({ field }) => (
//                 <NumberFormat {...field} thousandSeparator className="input" />
//               )}
//               name="numberFormat"
//               control={control}
//             />
//           </section> */}

//         {/* <section>
//             <Controller
//               control={control}
//               name="downShift"
//               render={({ field }) => <DownShift {...field} />}
//             />
//           </section> */}
//       </div>
//       <button> submit</button>

//       {/* <ButtonsResult {...{ reset }} /> */}
//     </form>
//     // </ThemeProvider>
//   );
// }

// export default App;

// // const rootElement = document.getElementById("root");
// // ReactDOM.render(<App />, rootElement);

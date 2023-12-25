// import Image from 'next/image'
// import { useEffect } from 'react'

// export default function Home() {
//   useEffect(() => {

//   })
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
//         <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//           Get started by editing&nbsp;
//           <code className="font-mono font-bold">app/page.tsx</code>
//         </p>
//         <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
//           <a
//             className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             By{' '}
//             <Image
//               src="/vercel.svg"
//               alt="Vercel Logo"
//               className="dark:invert"
//               width={100}
//               height={24}
//               priority
//             />
//           </a>
//         </div>
//       </div>

//       <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
//         <Image
//           className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//           src="/next.svg"
//           alt="Next.js Logo"
//           width={180}
//           height={37}
//           priority
//         />
//       </div>

//       <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
//         <a
//           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Docs{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Find in-depth information about Next.js features and API.
//           </p>
//         </a>

//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Learn{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Learn about Next.js in an interactive course with&nbsp;quizzes!
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Templates{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Explore starter templates for Next.js.
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Deploy{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Instantly deploy your Next.js site to a shareable URL with Vercel.
//           </p>
//         </a>
//       </div>
//     </main>
//   )
// }
'use client';
import * as React from 'react';
// import ReactDOM from "react-dom";
import { useForm, Controller } from 'react-hook-form';
import type {
  // NestedValue,
  // SubmitHandler,
  DefaultValues
} from 'react-hook-form';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import mockData from '../pages/formId/mock.json';

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
  RadioGroup: 'null'
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
    setValue
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
                      {/* {console.log('field1', field)} */}
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
                              shouldDirty: true
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

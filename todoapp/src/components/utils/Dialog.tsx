// import {useRef} from 'react'
// import "./Dialog.css";

// interface Props {
//     isOpen: boolean
// }

// interface DataItem {
//     name: string;
//     age: string;
//     country: string;
//   }

// const Dialog = ({isOpen}: Props) => {
//     const inputRef = useRef<HTMLInputElement>(null)

//   return (
//     <>
//       <dialog open={isOpen}>
//         <div className="modal">
//           <div className="modal-content">
//             <button className="close-button" onClick={closeModal}>
//               X
//             </button>
//             <br />
//             <p>Name:</p>
//             <br />
//             <input
//               id="name"
//               name="name"
//               type="text"
//               value={inputRef.current || ""}
//               onChange={(e) => inputRef.current = e.target.value}
//             />
//             <br />
//             <p>Age:</p>
//             <br />
//             <input
//               id="age"
//               name="age"
//               type="text"
//               value={age}
//               onChange={(e) => setAge(e.target.value)}
//             />
//             <br />
//             <p>Country:</p>
//             <br />
//             <input
//               id="country"
//               name="country"
//               type="text"
//               value={country}
//               onChange={(e) => setCountry(e.target.value)}
//             />
//             <br />
//             <button type="button" id="submit" onClick={add}>
//               Submit
//             </button>
//           </div>
//         </div>
//       </dialog>
//     </>
//   );
// };

// export default Dialog;

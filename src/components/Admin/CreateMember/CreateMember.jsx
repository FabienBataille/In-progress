// import { useEffect, useState } from 'react';
// import {
//   Grid,
//   Container,
//   Paper,
//   Button,
//   Box,
//   TextField,
//   Stack,
//   Select,
//   MenuItem,
//   FormControl,
//   InputLabel,
//   OutlinedInput,
//   Chip,
// } from '@mui/material';
// import axios from 'axios';
// import ActionButtons from '../Tools/ActionButtons';
// import Tab from '@mui/material/Tab';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';
// import MembersTable from './MembersTable';

const CreateMember = () => {
  return <h2>createMemberSection</h2>;
  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   if (member.isParent) {
  //     parents.push(member);
  //   } else if (member.isStudent) {
  //     students.push(member);
  //   } else if (member.isTeacher) {
  //     teachers.push(member);
  //   }
  // };

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setMember((prevValue) => {
  //     return {
  //       ...prevValue,
  //       [name]: value,
  //     };
  //   });
  // };

  // return (
  //   <>
  //     <Paper sx={{ padding: '1rem' }}>
  //       <h2>Create a new task</h2>
  //       <form method="POST" onSubmit={(e) => submitHandler(e)}>
  //         <Stack spacing={2}>
  //           <TextField
  //             maxLength={15}
  //             label="Nom"
  //             value={member.lName}
  //             onChange={(e) => handleInputChange(e)}
  //             name="lName"
  //           />
  //           <TextField
  //             maxLength={15}
  //             label="Prénom"
  //             value={member.fName}
  //             onChange={(e) => handleInputChange(e)}
  //             name="fName"
  //           />
  //           <TextField />
  //           <input type="date" name="date" hidden value={post.date} />
  //           <Select
  //             label="Category"
  //             value={post.category}
  //             name="category"
  //             onChange={handleInputChange}
  //           >
  //             {categories.map((cat, index) => {
  //               return (
  //                 <MenuItem key={index} value={cat.title}>
  //                   {cat.title}
  //                 </MenuItem>
  //               );
  //             })}
  //           </Select>
  //           <Button type="submit" color="success" variant="contained">
  //             Add
  //           </Button>
  //         </Stack>
  //       </form>
  //     </Paper>
  //   </>
  // );
};

export default CreateMember;

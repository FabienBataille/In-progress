import { useState } from 'react';
import { Grid, Container, Box } from '@mui/material';
// import ActionButtons from '../Tools/ActionButtons';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import MembersTable from './MembersTable';
import CreateMember from './CreateMember/CreateMember';
// supprimer les lignes suivantes apres connection a la base de donnees
import parents from '../Members/parents';
import teachers from '../Members/teachers';
import students from '../Members/students';

const Admin = () => {
  // const [members, setMembers] = useState([]);
  // After Backend completed, uncomment this portion of code:
  // -------------------------------------
  //   useEffect(() => {
  //     axios.get(<membersDataBaseUrl>)
  //     .then(allMembers) => {
  //       setMembers(allMembers.data)
  //   })
  //   }, []);
  //
  //   useEffect(() => {
  //     axios.get(<sectionsDatabaseUrl>)
  //     .then(allSections) => {
  //       setSections(allSections.data)
  //   })
  //   }, []);
  // -------------------------------------

  const categories = [
    {
      id: 700000000,
      name: 'élèves',
    },
    {
      id: 800000000,
      name: 'parents',
    },
    {
      id: 400000000,
      name: 'professeurs',
    },
  ];
  // to be deleted when backend is ready:
  // -------------------------------------
  const members = [students, teachers, parents];
  // -------------------------------------

  const [tabValue, setTabValue] = useState('Tous');
  const [actionButtonsDisplay, setActionButtonsDisplay] = useState(0);
  const [filteredMembers, setFilteredMembers] = useState(members.flat());

  // events handlers

  const handleTabChange = (e, newValue) => {
    let filteredArray = [];
    const [studentArray, teachersArray, parentsArray] = members;
    if (newValue === 'parents') {
      filteredArray = parentsArray;
    } else if (newValue === 'élèves') {
      filteredArray = studentArray;
    } else if (newValue === 'professeurs') {
      filteredArray = teachersArray;
    } else if (newValue === 'Tous') {
      filteredArray = members.flat();
    }
    setFilteredMembers(filteredArray);
  };

  return (
    <Container maxWidth="lg" style={{ padding: '2.5rem 0' }}>
      <Grid container justifyContent="space-between">
        <Grid item xs={12} sm={7}>
          <TabContext value={tabValue}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList
                onChange={handleTabChange}
                aria-label="lab API tabs example"
              >
                <Tab
                  label="Tous"
                  value="Tous"
                  onClick={() => setTabValue('Tous')}
                />
                {categories.map((cat) => {
                  return (
                    <Tab
                      key={cat.id}
                      label={cat.name}
                      value={cat.name}
                      onClick={() => setTabValue(cat.name)}
                    />
                  );
                })}
              </TabList>
            </Box>
            <TabPanel value="Tous">
              <Grid
                container
                spacing={2}
                onMouseOver={() => setActionButtonsDisplay(true)}
                onMouseLeave={() => setActionButtonsDisplay(false)}
              >
                <MembersTable members={filteredMembers} />
              </Grid>
            </TabPanel>
            {categories.map((cat) => {
              return (
                <TabPanel value={cat.name} key={cat.id}>
                  <Grid
                    container
                    spacing={2}
                    onMouseOver={() => setActionButtonsDisplay(true)}
                    onMouseLeave={() => setActionButtonsDisplay(false)}
                  >
                    <MembersTable
                      members={filteredMembers}
                      category={cat.name}
                    />
                  </Grid>
                </TabPanel>
              );
            })}
          </TabContext>
        </Grid>
        <Grid item xs={12} sm={3}>
          <CreateMember isActionButtonHidden={actionButtonsDisplay} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Admin;

/* eslint-disable react/prop-types */
import React from 'react';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import { Chip, Stack, TableBody, TableRow, Tooltip } from '@mui/material';

const MembersTable = ({ members, category }) => {
  const membersSortedByLastName = members.sort((a, b) =>
    a.lName.localeCompare(b.lName)
  );

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 428 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Nom</TableCell>
              <TableCell align="center">Prénom</TableCell>
              <TableCell align="center">Email</TableCell>
              {/* case Tab === Tous */}
              {!category && (
                <>
                  <TableCell align="center">Section</TableCell>
                  <TableCell align="center">Instruments</TableCell>
                  <TableCell align="center">Enfant(s)</TableCell>
                </>
              )}
              {/* case Tab === eleves or Tab === professeurs */}
              {category === 'élèves' && (
                <>
                  <TableCell align="center">Section</TableCell>
                  <TableCell align="center">Instruments</TableCell>
                </>
              )}
              {category === 'professeurs' && (
                <>
                  <TableCell align="center">Section</TableCell>
                  <TableCell align="center">Instruments</TableCell>
                </>
              )}
              {category === 'parents' && (
                <TableCell align="center">Enfant(s)</TableCell>
              )}

              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {membersSortedByLastName.map((member) => (
              <tr
                key={member.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="center">
                  <Tooltip title={`${member.lName} ${member.fName}`}>
                    <span>
                      {member.lName.length > 9
                        ? `${member.lName.slice(0, 9)}...`
                        : member.lName}
                    </span>
                  </Tooltip>
                </TableCell>
                <TableCell align="center">
                  <Tooltip title={member.fName}>
                    <span>
                      {member.fName.length > 9
                        ? `${member.fName.slice(0, 9)}...`
                        : member.fName}
                    </span>
                  </Tooltip>
                </TableCell>
                <TableCell align="center">
                  <Tooltip title={member.email}>
                    <a href={`/${member.id}/email`}>
                      {member.email.length > 7
                        ? `${member.email.slice(0, 7)}...`
                        : member.email}
                    </a>
                  </Tooltip>
                </TableCell>

                {/* case Tab === Tous */}
                {!category && (
                  <>
                    <TableCell align="center">
                      {member.section ? member.section : 'n/a'}
                    </TableCell>
                    <TableCell align="center">
                      {member.instruments ? (
                        <Stack>
                          {member.instruments.map((instr, index) => (
                            // eslint-disable-next-line react/no-array-index-key
                            <Chip label={instr} key={index} />
                          ))}
                        </Stack>
                      ) : (
                        'n/a'
                      )}
                    </TableCell>
                    <TableCell align="center">
                      {member.childrem ? (
                        <Stack>
                          {member.children.map((child, index) => (
                            // eslint-disable-next-line react/no-array-index-key
                            <Chip label={child} key={index} />
                          ))}
                        </Stack>
                      ) : (
                        'n/a'
                      )}
                    </TableCell>
                  </>
                )}

                {/* case Tab === eleves or Tab === professeurs ELSE Tab === parents */}
                {category === 'élèves' || category === 'professeurs' ? (
                  <>
                    <TableCell align="center">{member.section}</TableCell>
                    <TableCell align="center">
                      <Stack>
                        {member.instruments.map((instr, index) => (
                          // eslint-disable-next-line react/no-array-index-key
                          <Chip label={instr} key={index} />
                        ))}
                      </Stack>
                    </TableCell>
                  </>
                ) : (
                  category === 'parents' && (
                    <>
                      <TableCell align="center">
                        <Stack>
                          {member.children.map((child, index) => (
                            // eslint-disable-next-line react/no-array-index-key
                            <Chip label={child} key={index} />
                          ))}
                        </Stack>
                      </TableCell>
                    </>
                  )
                )}

                <TableCell align="center">
                  {/* bouttons a modifier apres l'etablissement des requetes http dans le backend */}
                  <Stack>
                    <button type="button">Voir</button>
                    <button type="button">Modifier</button>
                    <button type="button">Supprimer</button>
                  </Stack>
                </TableCell>
              </tr>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default MembersTable;

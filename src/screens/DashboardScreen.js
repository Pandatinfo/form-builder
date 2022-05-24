import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { Button, Grid, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { TableHead } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePaginationActions from "../components/TablePaginationActionView";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

export function Dashboard(props) {
  const addForm = () => {
    props.history.push({
      pathname: "/addForm",
      state: {
        title: "",
        desc: "",
        forms: "",
      },
    });
  };

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setrowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setrowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleModify = (form, index) => {
    props.history.push({
      pathname: "/modifyForm",
      state: {
        title: form.title,
        desc: form.desc,
        index: index,
        forms: form,
      },
    });
  };

  return (
    <>
      {localStorage.getItem("auth-token") ? (
        <>
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6} align="center">
              <Typography
                style={{ fontSize: 25, margin: "20px auto", marginLeft: 50 }}
              >
                Forms
              </Typography>
            </Grid>
            <Grid item xs={6} align="center">
              <Button
                style={{ margin: "20px auto", marginRight: 50 }}
                startIcon={<AddIcon />}
                variant="contained"
                onClick={addForm}
              />
            </Grid>
          </Grid>
          <TableContainer
            component={Paper}
            style={{
              padding: 20,
              height: "auto",
              width: "50%",
              margin: "20px auto",
            }}
          >
            <Table sx={{ minWidth: 500 }} arial-label="custom pagination table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <h3>Title</h3>
                  </TableCell>
                  <TableCell>
                    <h3>Description</h3>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(rowsPerPage > 0
                  ? props.forms.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : props.forms
                ).map((form, index) => {
                  return (
                    <TableRow
                      key={index}
                      onClick={() => handleModify(form, index)}
                    >
                      <TableCell>{form.title}</TableCell>
                      <TableCell>{form.desc}</TableCell>
                      <TableCell>
                        <ArrowForwardIosOutlinedIcon />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[
                      5,
                      10,
                      25,
                      { label: "All", value: -1 },
                    ]}
                    colSpan={3}
                    count={props.forms.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        </>
      ) : (
        props.history.push("/login")
      )}
    </>
  );
}
export default withRouter(Dashboard);

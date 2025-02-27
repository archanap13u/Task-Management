import { useState } from "react";
import { 
  Button, Card, CardContent, Typography, Dialog, DialogTitle, DialogContent, 
  DialogActions, TextField, Grid, MenuItem, Box, Chip 
} from "@mui/material";

const Leads = () => {
  const [projects, setProjects] = useState([
    { id: 1, name: "Project Alpha", client: "John Doe", budget: 10000, date: "2025-02-20", status: "Pending" },
    { id: 2, name: "Project Beta", client: "Jane Smith", budget: 20000, date: "2025-03-15", status: "On Progress" },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", client: "", budget: "", date: "", status: "Pending" });

  const openModal = () => setModalOpen(true);
  const closeModal = () => {
    setModalOpen(false);
    setFormData({ name: "", client: "", budget: "", date: "", status: "Pending" });
  };

  const handleSubmit = () => {
    setProjects([...projects, { id: Date.now(), ...formData }]);
    closeModal();
  };

  const updateStatus = (id, newStatus) => {
    setProjects(projects.map((p) => (p.id === id ? { ...p, status: newStatus } : p)));
  };

  return (
    <Box p={4}>
      <Typography variant="h4" fontWeight="bold" gutterBottom color="primary">
        Project Monitoring
      </Typography>

      <Grid container spacing={3}>
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <Card sx={{ p: 3, boxShadow: 3, borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold" color="text.primary">
                  {project.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Client: {project.client}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Budget: ₹{project.budget.toLocaleString()}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Date: {project.date}
                </Typography>
                <Chip
                  label={project.status}
                  sx={{
                    mt: 1.5,
                    fontWeight: "bold",
                    backgroundColor:
                      project.status === "Finished" ? "#4CAF50" :
                      project.status === "On Progress" ? "#2196F3" : "#FF9800",
                    color: "white"
                  }}
                />
              </CardContent>
              <Box display="flex" justifyContent="space-between" p={2}>
                <Button variant="contained" sx={{ bgcolor: "#FF9800" }} onClick={() => updateStatus(project.id, "Pending")}>
                  Pending
                </Button>
                <Button variant="contained" sx={{ bgcolor: "#2196F3" }} onClick={() => updateStatus(project.id, "On Progress")}>
                  Progressing
                </Button>
                <Button variant="contained" sx={{ bgcolor: "#4CAF50" }} onClick={() => updateStatus(project.id, "Finished")}>
                  Finished
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Add Project Button */}
      <Box mt={4}>
        <Button variant="contained" color="primary" onClick={openModal}>
          + Add Project
        </Button>
      </Box>

      {/* Add Project Modal */}
      <Dialog open={modalOpen} onClose={closeModal} fullWidth maxWidth="sm">
        <DialogTitle fontWeight="bold">Add New Project</DialogTitle>
        <DialogContent>
          <Box display="flex" flexDirection="column" gap={2} mt={1}>
            <TextField label="Project Name" fullWidth value={formData.name} 
              onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
            <TextField label="Client" fullWidth value={formData.client} 
              onChange={(e) => setFormData({ ...formData, client: e.target.value })} />
            <TextField label="Budget" fullWidth type="number" value={formData.budget} 
              onChange={(e) => setFormData({ ...formData, budget: e.target.value })} />
            <TextField label="Date" fullWidth type="date" InputLabelProps={{ shrink: true }} value={formData.date} 
              onChange={(e) => setFormData({ ...formData, date: e.target.value })} />
            <TextField select label="Status" fullWidth value={formData.status} 
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}>
              <MenuItem value="Pending">Pending</MenuItem>
              <MenuItem value="On Progress">On Progress</MenuItem>
              <MenuItem value="Finished">Finished</MenuItem>
            </TextField>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Add
          </Button>
          <Button variant="outlined" color="secondary" onClick={closeModal}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Leads;

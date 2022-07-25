import "./App.css";
import Layout from "./Components/NavBar/Layout";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Setting from "./Components/Setting";
import ProtectedRoutes from "./Components/ProtectedRoutes";
import ManageProfile from "./Components/Employee/ManageProfile/ManageProfile";
import ContactInfo from "./Components/Employee/Contact/ContactInfo";
import PersonalInfo from "./Components/Employee/PersonalInfo";
import Academic from "./Components/Employee/Academic/Academic";
import Professional from "./Components/Employee/ProfessionalQualification/Professional";
import Experience from "./Components/Employee/Experience/Experience";
import PendingRequest from "./Components/Evaluation/PendingRequest";
import PendingStatus from "./Components/Evaluation/PendingStatus";
import EmployeeEvaluation from "./Components/Evaluation/EmployeeEvaluation";
import Finance from "./Components/Finance/Finance";
import Resign from "./Components/Resign/Resign";
import HoursEntry from "./Components/HoursEntry/HoursEntry";
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<ProtectedRoutes />}>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="settings" element={<Setting />} />
						<Route
							path="manage-profile"
							element={<ManageProfile />}
						/>
						<Route path="contact-info" element={<ContactInfo />} />
						<Route
							path="personal-info"
							element={<PersonalInfo />}
						/>
						<Route path="academic" element={<Academic />} />
						<Route path="professional" element={<Professional />} />
						<Route path="experience" element={<Experience />} />
						<Route path="pending-request" element={<PendingRequest />} />
						<Route path="pending-status" element={<PendingStatus />} />
						<Route path="employee-evaluation" element={<EmployeeEvaluation />} />
						<Route path="finance" element={<Finance />} />
						<Route path="resign" element={<Resign />} />
						<Route path="hours-entry" element={<HoursEntry />} />

						{/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
					</Route>
				</Route>
				<Route path="login" element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

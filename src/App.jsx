import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import NavigationBar from "./components/navbar/NavigationBar";
import { ErrorState, LoadingState } from "./components/states";

const Homepage = lazy(() => import("./pages/home/Homepage"));
const Events = lazy(() => import("./pages/events/Events"));
const Resources = lazy(() => import("./pages/resources/Resources"));
const Domains=lazy(() => import("./pages/domains/Domain"))

function Client() {
	return (
		<>
			<NavigationBar />
			<Routes>
				<Route path="/homepage" element={<Homepage />} />
				<Route path="/events" element={<Events />} />
				<Route path="/resources" element={<Resources />} />
				<Route path="/domains" element={<Domains />} />
				<Route path="*" element={<Navigate to="/homepage" replace />} />
			</Routes>
		</>
	);
}

function App() {
	return (
		<BrowserRouter>
			<ErrorBoundary FallbackComponent={ErrorState}>
				<Suspense fallback={<LoadingState />}>
					<Routes>
						<Route path="/*" element={<Client />} />
					</Routes>
				</Suspense>
			</ErrorBoundary>
			{/* Add Footer */}
		</BrowserRouter>
	);
}

export default App;

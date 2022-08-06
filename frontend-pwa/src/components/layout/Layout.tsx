import Header from '../header'

const Layout = ({ children }: any) => {
	return (
		<>
			<Header />
			{children}
		</>
	)
}

export default Layout

import React from 'react';
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import 'fontsource-roboto';
import './footer.css'

const Footer = () => {
	return (
		<footer className='footer'>
			<Box bgcolor='text.secondary' color='white'>
				<Container >
					<Grid container spacing='5'>
						<Grid item xs={12} sm={4}>
							<Box borderBottom={1}>Help</Box>
							<Box>
								<Link to='/' color='inherit'>Contact</Link>
							</Box>
							<Box>
								<Link to='/' color='inherit'>Support</Link>
							</Box>
							<Box>
								<Link to='/' color='inherit'>Privacy</Link>
							</Box>
						</Grid>

						<Grid item xs={12} sm={4}>
							<Box borderBottom={1}>Account</Box>
							<Box>
								<Link to='/' color='inherit'>Account</Link>
							</Box>
							<Box>
								<Link to='/Login' color='inherit'>Log in</Link>
							</Box>
							<Box>
								<Link to='/' color='inherit'>Register</Link>
							</Box>
						</Grid>

						<Grid item xs={12} sm={4}>
							<Box borderBottom={1}>Donate</Box>
							<Box>
								<Link to='/Register' color='inherit'>Find Blood</Link>
							</Box>
							<Box>
								<Link to='/' color='inherit'>Donation Process</Link>
							</Box>
							<Box>
								<Link href='https://www.save.life/corona' color='inherit'>Corona Virus Live Tracker</Link>
							</Box>
						</Grid>
					</Grid>
				</Container>

			</Box>
			</footer>
	);
};

export default Footer;

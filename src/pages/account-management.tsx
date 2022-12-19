import { NextPage } from 'next'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Typography from '../components/Typography'

const PrivacyPolicy: NextPage = () => {
    return (
        <>
            <Navbar />
            <main>
                <section className='max-w-screen-md mx-10 lg:mx-auto pt-40 flex flex-col space-y-8 mb-20'>
                    <Typography variant='h3' as='h1'>
                        Account Management
                    </Typography>
                    <Typography variant='base'>
                        All account management settings are available by signing in to your account and navigating to
                        settings. You can access your settings by clicking on your avatar at the top right and then
                        <strong>Profile</strong>).
                    </Typography>
                    <div className='space-y-4'>
                        <Typography variant='h5'>Delete account</Typography>
                        <Typography variant='base'>
                            To delete your account:
                            <ol>
                                <li>
                                    1. Open your profile settings by clicking on your avatar at the top right and then{' '}
                                    <strong>Profile</strong>).
                                </li>
                                <li>2. Click Edit.</li>
                                <li>
                                    3. Scroll to the bottom and you should see a <strong>Delete Account</strong> button.
                                </li>
                                <li>4. Click to confirm, and your account will be deleted.</li>
                            </ol>
                        </Typography>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default PrivacyPolicy

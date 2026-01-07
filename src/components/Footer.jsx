import './Footer.css'

function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className='footer'>
            <p>© {year} Expense Tracker · Built with React</p>
        </footer>
    )
}

export default Footer;
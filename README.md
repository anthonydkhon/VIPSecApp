# VipSecApp - Cybersecurity Business Web Application

<div align="center">
  <img src="https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react" alt="React">
  <img src="https://img.shields.io/badge/Tailwind%20CSS-3.3.0-06B6D4?style=for-the-badge&logo=tailwindcss" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License">
</div>

A comprehensive cybersecurity business web application built with React, featuring role-based authentication, ticketing system, team messaging, and security education portal. Designed for cybersecurity companies to manage client communications, support tickets, and security training.

## 🚀 Features

- **🔐 Role-Based Authentication** - Admin and User access levels
- **📊 Security Dashboard** - Real-time security metrics and activity monitoring
- **🎫 Ticketing System** - Create, manage, and track security support requests
- **💬 Team Messaging** - Slack-integrated communication channels
- **📚 Education Portal** - Security training videos and educational content
- **👥 User Management** - Admin panel for user account management (Future)
- **🚨 Alert System** - Security alert monitoring and dark web scanning (Future)
- **📱 Responsive Design** - Mobile-friendly interface

## 🛠 Tech Stack

- **Frontend**: React 18.2.0, JavaScript (ES6+)
- **Styling**: Tailwind CSS 3.3.0
- **Icons**: Lucide React
- **Build Tool**: Create React App
- **State Management**: React Hooks (useState, useEffect)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 14.0.0 or later) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** - [Download here](https://git-scm.com/)

Check your versions:

```bash
node --version
npm --version
git --version
```

## 🏗 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/vipsecapp.git
cd vipsecapp
```

### 2. Install Dependencies

```bash
# Install all required packages
npm install

# Or if using yarn
yarn install
```

### 3. Start the Development Server

```bash
npm start

# Or if using yarn
yarn start
```

The application will automatically open in your browser at `http://localhost:3000`

## 🔑 Login Credentials

### Admin Account (Full Access)

- **Email**: `admin@vipsec.com`
- **Password**: `admin`
- **Access**: Dashboard, Tickets, Messages, Education, User Management, Alerts

### Regular User Account

- **Email**: `user@company.com` (or any valid email)
- **Password**: `password` (or any non-empty password)
- **Access**: Dashboard, Tickets, Messages, Education

## 📁 Project Structure

```
vipsecapp/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── auth/
│   │   │   └── LoginForm.jsx           # User authentication
│   │   ├── layout/
│   │   │   └── Navigation.jsx          # Main navigation sidebar
│   │   ├── dashboard/
│   │   │   └── Dashboard.jsx           # Security metrics dashboard
│   │   ├── tickets/
│   │   │   └── TicketSystem.jsx        # Support ticket management
│   │   ├── messages/
│   │   │   └── Messages.jsx            # Team communication
│   │   ├── education/
│   │   │   └── Education.jsx           # Security training videos
│   │   └── admin/
│   │       ├── UserManagement.jsx      # User account management
│   │       └── AlertSystem.jsx         # Security alerts & monitoring
│   ├── hooks/
│   │   └── useAuth.js                  # Authentication logic
│   ├── utils/
│   │   └── constants.js                # App constants and configuration
│   ├── styles/
│   │   └── index.css                   # Global styles and Tailwind imports
│   ├── App.jsx                         # Main application component
│   └── index.js                        # React entry point
├── package.json
├── tailwind.config.js
└── README.md
```

## 🎯 Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder. The build is minified and optimized for best performance.

### `npm run eject`

**Note: This is a one-way operation. Once you eject, you can't go back!**

## 🔧 Configuration

### Environment Variables (Optional)

Create a `.env` file in the root directory for future Slack integration:

```env
REACT_APP_SLACK_BOT_TOKEN=your_slack_bot_token
REACT_APP_SLACK_WEBHOOK_URL=your_slack_webhook_url
```

### Tailwind CSS

The project uses a custom Tailwind configuration with VipSec brand colors:

- `vip-blue`: Custom blue color palette
- `vip-slate`: Custom slate/gray palette
- Custom animations: `fade-in`, `slide-up`

## 🚨 Troubleshooting

### Common Issues

**1. Module not found: 'lucide-react'**

```bash
npm install lucide-react
```

**2. Tailwind styles not working**

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

**3. App won't start**

```bash
# Clear npm cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
npm start
```

**4. Port 3000 already in use**

```bash
# Kill process on port 3000 (Windows)
netstat -ano | findstr :3000
taskkill /PID  /F

# Kill process on port 3000 (Mac/Linux)
lsof -ti:3000 | xargs kill -9
```

## 🔮 Future Enhancements

### Planned Features

- **Backend Integration**: Node.js/Express API with MongoDB
- **Real Authentication**: JWT tokens, password hashing
- **Slack Integration**: Live notifications and messaging
- **Dark Web Monitoring**: Personal information exposure alerts
- **Email Notifications**: SMTP integration for ticket updates
- **Advanced Analytics**: Security metrics and reporting
- **Mobile App**: React Native companion application
- **SSO Integration**: Active Directory/LDAP support

### API Integration Points

- User authentication and session management
- Ticket system with email notifications
- Slack API for real-time messaging
- Third-party security APIs for threat intelligence
- Database persistence for all application data

## 🤝 Contributing

We welcome contributions! Here's how to get started:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines

- Follow React best practices and hooks patterns
- Use Tailwind CSS for styling (no custom CSS unless necessary)
- Maintain component separation and clean code structure
- Add comments for complex logic
- Test thoroughly before submitting PRs

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Development Team**: VipSec Development Team
- **UI/UX Design**: Modern cybersecurity-focused interface
- **Security Consultation**: Industry best practices implementation

## 📞 Support & Contact

- **Email**: support@vipsec.com
- **Documentation**: This README and inline code comments
- **Issues**: Please use GitHub Issues for bug reports and feature requests
- **Discussions**: Use GitHub Discussions for general questions

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - The web framework used
- [Tailwind CSS](https://tailwindcss.com/) - For utility-first CSS styling
- [Lucide React](https://lucide.dev/) - For beautiful, consistent icons
- [Create React App](https://create-react-app.dev/) - For quick project bootstrapping

## 📈 Project Status

- ✅ **Core Features**: Complete and functional
- ✅ **Authentication**: Role-based access implemented
- ✅ **UI/UX**: Professional, responsive design
- 🚧 **Backend Integration**: In development
- 🚧 **Slack API**: Integration planned
- 🚧 **Advanced Features**: Alert system and analytics

---

<div align="center">
  <p>Built with ❤️ by the VipSec Team</p>
  <p>© 2024 VipSec. All rights reserved.</p>
</div>

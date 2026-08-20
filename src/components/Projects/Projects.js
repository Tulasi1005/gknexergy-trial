// Projects.jsx
import React, { useState, useEffect, useRef } from 'react';
import {
  Container,
  Box,
  Typography,
  Chip,
  Button,
  LinearProgress,
  Paper,
  Stack,
  Divider,
  IconButton,
  Modal,
  Fade,
  Backdrop,
  Grid,
  Tooltip,
  Tab,
  Tabs,
  Avatar,
  AvatarGroup,
  Card,
  CardContent,
} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PendingIcon from '@mui/icons-material/Pending';
import LaunchIcon from '@mui/icons-material/Launch';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PeopleIcon from '@mui/icons-material/People';
import TimelineIcon from '@mui/icons-material/Timeline';
import StarIcon from '@mui/icons-material/Star';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SpeedIcon from '@mui/icons-material/Speed';
import DiamondIcon from '@mui/icons-material/Diamond';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import AddIcon from '@mui/icons-material/Add';
import { motion, AnimatePresence } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    icon: "🚀",
    title: "Web & Mobile Innovation Hub",
    category: "Development",
    status: "upcoming",
    progress: 65,
    description: "Cutting-edge full-stack solutions blending web and mobile technologies with real-world impact.",
    tech: ["React", "Node.js", "MongoDB", "Flutter"],
    color: "#1a56db",
    date: "2024",
    team: ["👨‍💻", "👩‍💻", "🧑‍💻"],
    details: [
      "Advanced Web Development",
      "Mobile-First Architecture",
      "Cloud-Native Solutions",
      "Real-Time Collaboration"
    ],
    gradient: "linear-gradient(135deg, #1a56db, #3b82f6, #60a5fa)"
  },
  {
    id: 2,
    icon: "📊",
    title: "Digital Marketing & Growth Studio",
    category: "Marketing",
    status: "upcoming",
    progress: 45,
    description: "Data-driven marketing strategies using AI-powered analytics and social media mastery.",
    tech: ["SEO", "SEM", "SMM", "Analytics"],
    color: "#2563eb",
    date: "2024",
    team: ["📊", "📱", "💡"],
    details: [
      "SEO & SEM Mastery",
      "Social Media Domination",
      "Content Strategy",
      "Campaign Optimization"
    ],
    gradient: "linear-gradient(135deg, #2563eb, #3b82f6, #60a5fa)"
  },
  {
    id: 3,
    icon: "🌟",
    title: "Professional Excellence Program",
    category: "Professional",
    status: "completed",
    progress: 100,
    description: "Transformational programs designed to build exceptional communication and leadership skills.",
    tech: ["Communication", "Leadership", "Resume"],
    color: "#059669",
    date: "2023",
    team: ["🎓", "🌟", "💼"],
    details: [
      "Leadership Development",
      "Strategic Communication",
      "Executive Presence",
      "Career Advancement"
    ],
    gradient: "linear-gradient(135deg, #059669, #10b981, #34d399)"
  },
  {
    id: 4,
    icon: "🏥",
    title: "AI Healthcare Revolution",
    category: "Healthcare",
    status: "upcoming",
    progress: 30,
    description: "AI-powered healthcare ecosystem transforming patient care and hospital operations.",
    tech: ["React", "Node.js", "AI", "MongoDB"],
    color: "#3b82f6",
    date: "2024",
    team: ["🏥", "🤖", "💊"],
    details: [
      "AI Patient Management",
      "Smart Diagnostics",
      "Operational Excellence",
      "Healthcare Analytics"
    ],
    gradient: "linear-gradient(135deg, #3b82f6, #60a5fa, #93c5fd)"
  },
  {
    id: 5,
    icon: "🏡",
    title: "AI Real Estate Intelligence",
    category: "Real Estate",
    status: "completed",
    progress: 100,
    description: "Intelligent real estate platform using AI for property discovery and market insights.",
    tech: ["Next.js", "Python", "AI", "PostgreSQL"],
    color: "#0284c7",
    date: "2023",
    team: ["🏠", "🔍", "📈"],
    details: [
      "Property Discovery AI",
      "Market Intelligence",
      "Lead Generation",
      "Business Analytics"
    ],
    gradient: "linear-gradient(135deg, #0284c7, #38bdf8, #7dd3fc)"
  },
  {
    id: 6,
    icon: "🍽️",
    title: "AI Restaurant Transformation",
    category: "Food & Beverage",
    status: "completed",
    progress: 100,
    description: "Technology-driven restaurant ecosystem with AI-powered personalization.",
    tech: ["React", "Express", "AI", "Firebase"],
    color: "#d97706",
    date: "2023",
    team: ["🍽️", "🤖", "👨‍🍳"],
    details: [
      "Personalized Dining",
      "Operational Excellence",
      "Customer Intelligence",
      "AI Recommendations"
    ],
    gradient: "linear-gradient(135deg, #d97706, #f59e0b, #fbbf24)"
  },
  {
    id: 7,
    icon: "💪",
    title: "NutriBest Wellness Platform",
    category: "E-Commerce",
    status: "completed",
    progress: 100,
    description: "Seamless health & wellness e-commerce experience with smart product discovery.",
    tech: ["React", "Stripe", "Redux", "Node.js"],
    color: "#10b981",
    date: "2023",
    team: ["🥗", "🛒", "💪"],
    details: [
      "Smart Shopping",
      "Wellness Analytics",
      "Order Management",
      "Customer Engagement"
    ],
    gradient: "linear-gradient(135deg, #10b981, #34d399, #6ee7b7)"
  },
  {
    id: 8,
    icon: "🏢",
    title: "GK Nexergy Digital Presence",
    category: "Corporate",
    status: "completed",
    progress: 100,
    description: "Premium corporate digital experience showcasing technological leadership.",
    tech: ["Next.js", "TypeScript", "GSAP", "Sass"],
    color: "#1a56db",
    date: "2023",
    team: ["🏢", "💻", "🚀"],
    details: [
      "Digital Excellence",
      "Tech Leadership",
      "Brand Identity",
      "Corporate Innovation"
    ],
    gradient: "linear-gradient(135deg, #1a56db, #3b82f6, #60a5fa)"
  },
];

// ===== STYLED COMPONENTS =====

const PageWrapper = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(180deg, #f0f4ff 0%, #e8edff 30%, #f5f0ff 60%, #f0f4ff 100%)',
  backgroundSize: '400% 400%',
  minHeight: '100vh',
  position: 'relative',
  overflow: 'hidden',
}));

const PremiumBackground = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 0,
  pointerEvents: 'none',
  '& .gradient-blob': {
    position: 'absolute',
    borderRadius: '50%',
    filter: 'blur(120px)',
    opacity: 0.25,
  },
  '& .blob-1': {
    top: '-15%',
    right: '-10%',
    width: '700px',
    height: '700px',
    background: 'radial-gradient(circle, rgba(26,86,219,0.08), rgba(96,165,250,0.04), transparent)',
    animation: 'floatBlob1 25s ease-in-out infinite',
  },
  '& .blob-2': {
    bottom: '-20%',
    left: '-10%',
    width: '800px',
    height: '800px',
    background: 'radial-gradient(circle, rgba(59,130,246,0.06), rgba(167,139,250,0.04), transparent)',
    animation: 'floatBlob2 30s ease-in-out infinite',
  },
  '& .blob-3': {
    top: '40%',
    left: '20%',
    width: '500px',
    height: '500px',
    background: 'radial-gradient(circle, rgba(96,165,250,0.05), rgba(26,86,219,0.02), transparent)',
    animation: 'floatBlob3 28s ease-in-out infinite',
  },
  '& .blob-4': {
    bottom: '10%',
    right: '25%',
    width: '400px',
    height: '400px',
    background: 'radial-gradient(circle, rgba(167,139,250,0.04), rgba(59,130,246,0.02), transparent)',
    animation: 'floatBlob4 22s ease-in-out infinite',
  },
  '@keyframes floatBlob1': {
    '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
    '33%': { transform: 'translate(-60px, 40px) scale(1.1)' },
    '66%': { transform: 'translate(40px, -30px) scale(0.9)' },
  },
  '@keyframes floatBlob2': {
    '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
    '50%': { transform: 'translate(50px, -60px) scale(1.15)' },
  },
  '@keyframes floatBlob3': {
    '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
    '50%': { transform: 'translate(-40px, 30px) scale(1.1)' },
  },
  '@keyframes floatBlob4': {
    '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
    '50%': { transform: 'translate(30px, -20px) scale(1.2)' },
  },
}));

const HeroSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  padding: theme.spacing(10, 0, 5),
  textAlign: 'center',
}));

// ===== MINIMALIST CARD DESIGN =====
const MinimalCard = styled(motion.div)(({ theme, color }) => ({
  height: '100%',
  borderRadius: '16px',
  background: '#ffffff',
  border: '1px solid #eef2f6',
  boxShadow: '0 1px 4px rgba(0,0,0,0.02)',
  position: 'relative',
  overflow: 'hidden',
  cursor: 'pointer',
  transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    transform: 'translateY(-8px)',
    borderColor: color || '#1a56db',
    boxShadow: `0 16px 48px ${alpha(color || '#1a56db', 0.06)}, 0 4px 12px ${alpha(color || '#1a56db', 0.02)}`,
  },
  // Left accent border
  '&::before': {
    content: '""',
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: '4px',
    background: color || '#1a56db',
    opacity: 0,
    transition: 'opacity 0.4s ease, transform 0.4s ease',
    transform: 'scaleY(0.5)',
    borderRadius: '0 2px 2px 0',
  },
  '&:hover::before': {
    opacity: 1,
    transform: 'scaleY(1)',
  },
}));

// Card Header with left-aligned content
const CardHeader = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2.5, 3, 1.5),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  borderBottom: '1px solid #f1f4f8',
}));

// Icon wrapper with circular design
const IconWrapper = styled(motion.div)(({ theme, gradient }) => ({
  width: '44px',
  height: '44px',
  borderRadius: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.5rem',
  background: gradient || 'linear-gradient(135deg, rgba(26,86,219,0.06), rgba(96,165,250,0.04))',
  border: '1px solid rgba(26,86,219,0.06)',
  flexShrink: 0,
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05) rotate(-5deg)',
  },
}));

// Status indicator
const StatusIndicator = styled(Box)(({ status }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  fontSize: '0.55rem',
  fontWeight: 600,
  color: status === 'completed' ? '#059669' : '#1a56db',
  '& .dot': {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    background: status === 'completed' ? '#059669' : '#1a56db',
    animation: status === 'completed' ? 'none' : 'pulseDot 2s ease-in-out infinite',
  },
  '@keyframes pulseDot': {
    '0%, 100%': { opacity: 1, transform: 'scale(1)' },
    '50%': { opacity: 0.4, transform: 'scale(0.6)' },
  },
}));

// Card Body
const CardBody = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1.5, 3, 2),
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
}));

// Feature list with minimal bullets
const FeatureList = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(0.5),
  marginBottom: theme.spacing(1),
  '& .feature-item': {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    fontSize: '0.72rem',
    color: '#475569',
    '& .bullet': {
      width: '3px',
      height: '3px',
      borderRadius: '50%',
      background: '#1a56db',
      flexShrink: 0,
    },
  },
}));

// Tech stack with minimal tags
const TechStack = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '4px',
  marginTop: 'auto',
  '& .tech-tag': {
    padding: '2px 10px',
    borderRadius: '100px',
    background: '#f8faff',
    color: '#64748b',
    fontSize: '0.5rem',
    fontWeight: 500,
    border: '1px solid #eef2f6',
    transition: 'all 0.3s ease',
    '&:hover': {
      background: 'rgba(26,86,219,0.04)',
      borderColor: '#1a56db',
      color: '#1a56db',
    },
  },
}));

// Card Footer
const CardFooter = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1.5, 3, 2.5),
  borderTop: '1px solid #f1f4f8',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 1.5,
}));

// Progress bar with minimal design
const MinimalProgress = styled(Box)(({ theme, color }) => ({
  flex: 1,
  height: '3px',
  borderRadius: '2px',
  background: '#eef2f6',
  position: 'relative',
  overflow: 'hidden',
  '& .bar': {
    height: '100%',
    borderRadius: '2px',
    background: color || '#1a56db',
    transition: 'width 2.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
}));

// ===== PLACEHOLDER CARD =====
const PlaceholderCard = styled(motion.div)(({ theme }) => ({
  height: '100%',
  borderRadius: '16px',
  background: 'rgba(255,255,255,0.4)',
  backdropFilter: 'blur(12px)',
  border: '2px dashed #d4e6ff',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(4),
  textAlign: 'center',
  transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
  '&:hover': {
    background: 'rgba(255,255,255,0.6)',
    borderColor: '#1a56db',
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 32px rgba(26,86,219,0.06)',
  },
}));

// ===== GRADIENT TABS =====
const TabContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'inline-flex',
  padding: '4px',
  background: 'rgba(255,255,255,0.7)',
  backdropFilter: 'blur(20px)',
  borderRadius: '16px',
  border: '1px solid rgba(255,255,255,0.9)',
  boxShadow: '0 4px 24px rgba(0,0,0,0.02)',
}));

const StyledTabs = styled(Tabs)(({ theme }) => ({
  minHeight: 44,
  '& .MuiTabs-indicator': {
    display: 'none',
  },
  '& .MuiTabs-flexContainer': {
    gap: theme.spacing(0.5),
  },
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  textTransform: 'none',
  fontWeight: 600,
  fontSize: '0.8rem',
  color: '#64748b',
  padding: '6px 22px',
  minHeight: 36,
  borderRadius: '12px',
  transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
  '&.Mui-selected': {
    color: '#ffffff',
    background: 'linear-gradient(135deg, #1a56db, #3b82f6, #60a5fa)',
    backgroundSize: '200% 200%',
    boxShadow: '0 4px 20px rgba(26,86,219,0.25)',
    animation: 'tabGradient 3s ease infinite',
  },
  '&:hover': {
    color: '#1a56db',
    background: 'rgba(26,86,219,0.04)',
  },
  '&.Mui-selected:hover': {
    color: '#ffffff',
    background: 'linear-gradient(135deg, #1a56db, #3b82f6, #60a5fa)',
    backgroundSize: '200% 200%',
    animation: 'tabGradient 3s ease infinite',
  },
  '@keyframes tabGradient': {
    '0%, 100%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
  },
}));

// --- Buttons ---
const ActionButton = styled(motion.button)(({ theme }) => ({
  background: 'linear-gradient(135deg, #1a56db, #3b82f6, #60a5fa)',
  backgroundSize: '200% 200%',
  animation: 'btnGradient 3s ease infinite',
  color: '#ffffff',
  borderRadius: '100px',
  fontWeight: 600,
  textTransform: 'none',
  padding: '4px 16px',
  fontSize: '0.65rem',
  border: 'none',
  cursor: 'pointer',
  transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
  boxShadow: '0 2px 12px rgba(26,86,219,0.12)',
  '&:hover': {
    transform: 'translateY(-2px) scale(1.04)',
    boxShadow: '0 4px 20px rgba(26,86,219,0.2)',
  },
  '&:disabled': {
    opacity: 0.4,
    cursor: 'not-allowed',
    transform: 'none !important',
  },
  '@keyframes btnGradient': {
    '0%, 100%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
  },
}));

const PrimaryButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(135deg, #1a56db, #3b82f6, #60a5fa, #93c5fd)',
  backgroundSize: '300% 300%',
  animation: 'btnGradient 4s ease infinite',
  color: '#ffffff',
  borderRadius: '100px',
  fontWeight: 600,
  textTransform: 'none',
  padding: '14px 40px',
  fontSize: '0.95rem',
  transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
  boxShadow: '0 4px 24px rgba(26,86,219,0.15)',
  '&:hover': {
    boxShadow: '0 8px 40px rgba(26,86,219,0.3)',
    transform: 'translateY(-3px) scale(1.02)',
  },
  '@keyframes btnGradient': {
    '0%, 100%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
  },
}));

const StyledModal = styled(Modal)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(2),
}));

const ModalContent = styled(Paper)(({ theme }) => ({
  maxWidth: 520,
  width: '100%',
  maxHeight: '90vh',
  overflow: 'auto',
  padding: theme.spacing(4),
  borderRadius: '24px',
  background: '#ffffff',
  position: 'relative',
  outline: 'none',
  boxShadow: '0 48px 96px rgba(0,0,0,0.08)',
  border: '1px solid rgba(255,255,255,0.5)',
}));

const ModalDetailItem = styled(motion.div)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  padding: theme.spacing(0.5, 0),
  '& .dot': {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #1a56db, #60a5fa)',
    flexShrink: 0,
  },
  '& .text': {
    color: '#4a5568',
    fontSize: '0.85rem',
    fontWeight: 400,
  },
}));

// --- Animated Counter ---
function AnimatedCounter({ end, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const increment = end / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.3 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return <span ref={countRef}>{count}</span>;
}

// ===== MAIN COMPONENT =====
export default function Projects() {
  const [tabValue, setTabValue] = useState('all');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const tabs = [
    { value: 'all', label: 'All Projects' },
    { value: 'upcoming', label: 'In Development' },
    { value: 'completed', label: 'Completed' },
  ];

  const getFilteredProjects = () => {
    if (tabValue === 'all') return projectsData;
    return projectsData.filter((p) => p.status === tabValue);
  };

  const filteredProjects = getFilteredProjects();

  const totalProjects = projectsData.length;
  const completedCount = projectsData.filter((p) => p.status === 'completed').length;
  const upcomingCount = projectsData.filter((p) => p.status === 'upcoming').length;

  const getTabCount = (value) => {
    if (value === 'all') return totalProjects;
    return projectsData.filter((p) => p.status === value).length;
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  // Helper function to calculate placeholder count
  const getPlaceholderCount = (projects) => {
    const remainder = projects.length % 3;
    if (remainder === 0) return 0;
    return 3 - remainder;
  };

  // --- Animation Variants ---
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.06,
        duration: 0.6,
        type: "spring",
        stiffness: 120,
        damping: 18,
      },
    }),
  };

  const placeholderVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
    },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.06 + 0.3,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 18,
      },
    }),
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.1,
      },
    },
  };

  const heroTextVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.12,
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1],
      },
    }),
  };

  const statItemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: i * 0.1 + 0.3,
        duration: 0.6,
        type: "spring",
        stiffness: 150,
        damping: 20,
      },
    }),
  };

  return (
    <PageWrapper>
      <PremiumBackground>
        <div className="gradient-blob blob-1" />
        <div className="gradient-blob blob-2" />
        <div className="gradient-blob blob-3" />
        <div className="gradient-blob blob-4" />
      </PremiumBackground>

      {/* ===== HERO SECTION ===== */}
      <HeroSection>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Chip
              icon={<AutoAwesomeIcon sx={{ fontSize: 14, color: '#1a56db' }} />}
              label="✦ Our Portfolio"
              sx={{
                background: 'rgba(26,86,219,0.06)',
                color: '#1a56db',
                borderColor: 'rgba(26,86,219,0.08)',
                border: '1px solid',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontSize: '0.55rem',
                mb: 4,
                backdropFilter: 'blur(10px)',
                '&:hover': {
                  background: 'rgba(26,86,219,0.1)',
                  transform: 'scale(1.02)',
                  transition: 'all 0.3s ease',
                },
              }}
            />
          </motion.div>

          <motion.div
            custom={0}
            variants={heroTextVariants}
            initial="hidden"
            animate="visible"
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2rem', md: '3.8rem' },
                fontWeight: 800,
                color: '#0a1628',
                lineHeight: 1.05,
                mb: 2,
                letterSpacing: '-0.02em',
              }}
            >
              <Box component="span" sx={{
                background: 'linear-gradient(135deg, #1a56db, #3b82f6, #60a5fa, #93c5fd)',
                backgroundSize: '300% 300%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'heroGradient 6s ease infinite',
              }}>
                Crafting
              </Box>
              <br />
              <Box component="span" sx={{ color: '#0a1628' }}>
                Digital Excellence
              </Box>
            </Typography>
            <style>
              {`
                @keyframes heroGradient {
                  0%, 100% { backgroundPosition: 0% 50%; }
                  50% { backgroundPosition: 100% 50%; }
                }
              `}
            </style>
          </motion.div>

          <motion.div
            custom={1}
            variants={heroTextVariants}
            initial="hidden"
            animate="visible"
          >
            <Typography
              variant="body1"
              sx={{
                color: '#4a5568',
                fontSize: '1.05rem',
                maxWidth: '540px',
                mx: 'auto',
                mb: 4,
                opacity: 0.85,
              }}
            >
              Discover our portfolio of groundbreaking projects that push the boundaries
              of technology and design.
            </Typography>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <Paper
              elevation={0}
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 4,
                padding: '24px 56px',
                background: 'rgba(255,255,255,0.7)',
                backdropFilter: 'blur(24px)',
                border: '1px solid rgba(255,255,255,0.8)',
                borderRadius: '24px',
                mx: 'auto',
                flexWrap: 'wrap',
                justifyContent: 'center',
                boxShadow: '0 4px 32px rgba(0,0,0,0.02)',
              }}
            >
              {[
                { label: 'Total Projects', value: totalProjects, color: '#0a1628', icon: <RocketLaunchIcon sx={{ fontSize: 20 }} /> },
                { label: 'Completed', value: completedCount, color: '#059669', icon: <CheckCircleIcon sx={{ fontSize: 20 }} /> },
                { label: 'In Progress', value: upcomingCount, color: '#1a56db', icon: <TimelineIcon sx={{ fontSize: 20 }} /> },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={statItemVariants}
                  style={{ textAlign: 'center' }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, color: stat.color }}>
                    {stat.icon}
                    <Typography variant="h3" sx={{ color: stat.color, fontWeight: 800, fontSize: '2rem' }}>
                      <AnimatedCounter end={stat.value} duration={1500} />
                    </Typography>
                  </Box>
                  <Typography variant="caption" sx={{
                    color: '#64748b',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    fontSize: '0.55rem',
                    fontWeight: 600,
                  }}>
                    {stat.label}
                  </Typography>
                  {i < 2 && (
                    <Divider orientation="vertical" sx={{ bgcolor: '#e8ecf0', height: 40, mx: 2, display: { xs: 'none', sm: 'inline-flex' } }} />
                  )}
                </motion.div>
              ))}
            </Paper>
          </motion.div>
        </Container>
      </HeroSection>

      {/* ===== TABS SECTION ===== */}
      <Container maxWidth="lg" sx={{ mt: 2, mb: 2, position: 'relative', zIndex: 2 }}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 2,
          mb: 3,
        }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <TabContainer>
              <StyledTabs
                value={tabValue}
                onChange={handleTabChange}
              >
                {tabs.map((tab) => (
                  <StyledTab
                    key={tab.value}
                    value={tab.value}
                    label={
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <span>{tab.label}</span>
                        <motion.span
                          key={tab.value}
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                        >
                          <Box
                            sx={{
                              background: tabValue === tab.value ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.04)',
                              color: tabValue === tab.value ? '#ffffff' : '#64748b',
                              borderRadius: '100px',
                              padding: '0 8px',
                              fontSize: '0.55rem',
                              fontWeight: 700,
                              height: '18px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              transition: 'all 0.3s ease',
                            }}
                          >
                            {getTabCount(tab.value)}
                          </Box>
                        </motion.span>
                      </Box>
                    }
                  />
                ))}
              </StyledTabs>
            </TabContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Typography variant="body2" sx={{
              color: '#64748b',
              fontWeight: 500,
              fontSize: '0.75rem',
              background: 'rgba(255,255,255,0.5)',
              backdropFilter: 'blur(8px)',
              padding: '4px 16px',
              borderRadius: '100px',
              border: '1px solid rgba(255,255,255,0.8)',
            }}>
              {filteredProjects.length} projects
            </Typography>
          </motion.div>
        </Box>
      </Container>

      {/* ===== PROJECTS GRID ===== */}
      <Box sx={{ py: 2, pb: 8, position: 'relative', zIndex: 2 }}>
        <Container maxWidth="lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={tabValue}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <Grid container spacing={3}>
                {/* Render Project Cards */}
                {filteredProjects.map((project, index) => (
                  <Grid item xs={12} sm={6} md={4} key={project.id}>
                    <motion.div
                      custom={index}
                      variants={cardVariants}
                      initial="hidden"
                      animate="visible"
                      style={{ height: '100%' }}
                    >
                      <MinimalCard color={project.color}>
                        {/* Card Header */}
                        <CardHeader>
                          <IconWrapper
                            gradient={project.gradient}
                            whileHover={{ scale: 1.05, rotate: -5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            {project.icon}
                          </IconWrapper>
                          <Box sx={{ flex: 1, minWidth: 0 }}>
                            <Typography
                              variant="subtitle1"
                              sx={{
                                fontWeight: 700,
                                color: '#0a1628',
                                fontSize: '0.9rem',
                                lineHeight: 1.2,
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                              }}
                            >
                              {project.title}
                            </Typography>
                            <StatusIndicator status={project.status}>
                              <span className="dot" />
                              {project.status === 'completed' ? 'Completed' : 'In Progress'}
                            </StatusIndicator>
                          </Box>
                          <Chip
                            label={project.category}
                            size="small"
                            sx={{
                              background: 'rgba(26,86,219,0.04)',
                              color: '#1a56db',
                              border: '1px solid rgba(26,86,219,0.06)',
                              fontSize: '0.5rem',
                              height: '20px',
                              flexShrink: 0,
                            }}
                          />
                        </CardHeader>

                        {/* Card Body */}
                        <CardBody>
                          <Typography
                            variant="body2"
                            sx={{
                              color: '#475569',
                              lineHeight: 1.6,
                              fontSize: '0.78rem',
                              mb: 0.5,
                            }}
                          >
                            {project.description}
                          </Typography>

                          {/* Feature List */}
                          <FeatureList>
                            {project.details.slice(0, 3).map((detail, i) => (
                              <Box key={i} className="feature-item">
                                <Box className="bullet" />
                                {detail}
                              </Box>
                            ))}
                            {project.details.length > 3 && (
                              <Box className="feature-item" sx={{ color: '#94a3b8', fontSize: '0.65rem' }}>
                                +{project.details.length - 3} more features
                              </Box>
                            )}
                          </FeatureList>

                          {/* Tech Stack */}
                          <TechStack>
                            {project.tech.slice(0, 4).map((tech, i) => (
                              <span key={i} className="tech-tag">{tech}</span>
                            ))}
                            {project.tech.length > 4 && (
                              <span className="tech-tag">+{project.tech.length - 4}</span>
                            )}
                          </TechStack>
                        </CardBody>

                        {/* Card Footer */}
                        <CardFooter>
                          <Box sx={{ flex: 1 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                              <MinimalProgress color={project.color}>
                                <div className="bar" style={{ width: `${project.progress}%` }} />
                              </MinimalProgress>
                              <Typography
                                variant="caption"
                                sx={{
                                  color: project.color,
                                  fontWeight: 700,
                                  fontSize: '0.6rem',
                                  minWidth: 28,
                                }}
                              >
                                {project.progress}%
                              </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 0.3 }}>
                              <CalendarTodayIcon sx={{ fontSize: 10, color: '#94a3b8' }} />
                              <Typography variant="caption" sx={{ color: '#94a3b8', fontSize: '0.5rem' }}>
                                {project.date}
                              </Typography>
                              <PeopleIcon sx={{ fontSize: 10, color: '#94a3b8', ml: 0.5 }} />
                              <Typography variant="caption" sx={{ color: '#94a3b8', fontSize: '0.5rem' }}>
                                {project.team.length} members
                              </Typography>
                            </Box>
                          </Box>

                          {project.status !== 'upcoming' && (
                            <Tooltip title="View details" arrow>
                              <ActionButton
                                onClick={() => handleOpenModal(project)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                View
                              </ActionButton>
                            </Tooltip>
                          )}
                        </CardFooter>
                      </MinimalCard>
                    </motion.div>
                  </Grid>
                ))}

                {/* Placeholder Cards */}
                {filteredProjects.length > 0 && getPlaceholderCount(filteredProjects) > 0 && 
                  [...Array(getPlaceholderCount(filteredProjects))].map((_, index) => (
                    <Grid item xs={12} sm={6} md={4} key={`placeholder-${index}`}>
                      <motion.div
                        custom={index}
                        variants={placeholderVariants}
                        initial="hidden"
                        animate="visible"
                        style={{ height: '100%' }}
                      >
                        <PlaceholderCard>
                          <Box
                            sx={{
                              width: 56,
                              height: 56,
                              borderRadius: '50%',
                              background: 'rgba(26,86,219,0.04)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              mb: 2,
                              border: '2px dashed rgba(26,86,219,0.1)',
                            }}
                          >
                            <AddIcon sx={{ fontSize: 28, color: '#1a56db', opacity: 0.4 }} />
                          </Box>
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 600,
                              color: '#1a56db',
                              fontSize: '0.95rem',
                              mb: 0.5,
                            }}
                          >
                            Coming Soon
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: '#94a3b8',
                              fontSize: '0.7rem',
                              maxWidth: '180px',
                            }}
                          >
                            More exciting projects are in the pipeline
                          </Typography>
                          <Box
                            sx={{
                              mt: 2,
                              display: 'flex',
                              gap: 1,
                              alignItems: 'center',
                            }}
                          >
                            {[...Array(3)].map((_, i) => (
                              <Box
                                key={i}
                                sx={{
                                  width: 5,
                                  height: 5,
                                  borderRadius: '50%',
                                  background: '#1a56db',
                                  opacity: 0.15 + (i * 0.1),
                                  animation: `pulseDot ${2 + i * 0.5}s ease-in-out infinite`,
                                }}
                              />
                            ))}
                          </Box>
                        </PlaceholderCard>
                      </motion.div>
                    </Grid>
                  ))
                }

                {/* No Projects Found */}
                {filteredProjects.length === 0 && (
                  <Grid item xs={12}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Box sx={{
                        textAlign: 'center',
                        py: 10,
                        background: 'rgba(255,255,255,0.5)',
                        backdropFilter: 'blur(12px)',
                        borderRadius: '28px',
                        border: '1px solid rgba(255,255,255,0.6)',
                      }}>
                        <Typography variant="h5" sx={{ color: '#64748b', fontWeight: 600, mb: 1 }}>
                          No projects found
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                          Try selecting a different filter
                        </Typography>
                      </Box>
                    </motion.div>
                  </Grid>
                )}
              </Grid>
            </motion.div>
          </AnimatePresence>
        </Container>
      </Box>

      {/* ===== CTA SECTION ===== */}
      <Box sx={{
        position: 'relative',
        zIndex: 2,
        background: 'linear-gradient(135deg, rgba(238,244,255,0.7), rgba(224,235,255,0.5), rgba(212,228,255,0.3))',
        backdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(255,255,255,0.6)',
        py: 7,
        textAlign: 'center',
      }}>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: '1.6rem', md: '2.8rem' },
                fontWeight: 800,
                color: '#0a1628',
                mb: 1.5,
                letterSpacing: '-0.02em',
              }}
            >
              Ready to Build Something{' '}
              <Box component="span" sx={{
                background: 'linear-gradient(135deg, #1a56db, #3b82f6, #60a5fa, #93c5fd)',
                backgroundSize: '300% 300%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'heroGradient 6s ease infinite',
              }}>
                Extraordinary
              </Box>
              ?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#4a5568',
                mb: 3.5,
                fontSize: '1rem',
                maxWidth: '520px',
                mx: 'auto',
                opacity: 0.85,
              }}
            >
              Let's collaborate to turn your vision into a remarkable digital experience.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1.5, justifyContent: 'center', flexWrap: 'wrap' }}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <PrimaryButton size="large" endIcon={<ArrowForwardIcon />}>
                  Start Your Project
                </PrimaryButton>
              </motion.div>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* ===== MODAL ===== */}
      <StyledModal
        open={modalOpen}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
          sx: { backgroundColor: 'rgba(10,22,40,0.4)', backdropFilter: 'blur(12px)' },
        }}
      >
        <Fade in={modalOpen} timeout={400}>
          <ModalContent elevation={0}>
            <IconButton
              onClick={handleCloseModal}
              sx={{
                position: 'absolute',
                top: 12,
                right: 12,
                color: '#64748b',
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: '#0a1628',
                  background: '#f1f4f8',
                  transform: 'rotate(90deg) scale(1.1)',
                },
              }}
            >
              <CloseIcon sx={{ fontSize: 20 }} />
            </IconButton>

            {selectedProject && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2.5 }}>
                  <Box sx={{
                    width: 56,
                    height: 56,
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    background: selectedProject.gradient || 'linear-gradient(135deg, #1a56db, #3b82f6)',
                    boxShadow: '0 4px 16px rgba(26,86,219,0.08)',
                  }}>
                    {selectedProject.icon}
                  </Box>
                  <Box>
                    <Typography variant="h5" sx={{ fontWeight: 700, color: '#0a1628' }}>
                      {selectedProject.title}
                    </Typography>
                    <StatusIndicator status={selectedProject.status} sx={{ mt: 0.5 }}>
                      <span className="dot" />
                      {selectedProject.status === 'completed' ? 'Completed' : 'In Progress'}
                    </StatusIndicator>
                  </Box>
                </Box>

                <Divider sx={{ my: 2 }} />

                <Typography
                  variant="subtitle2"
                  sx={{
                    color: '#64748b',
                    textTransform: 'uppercase',
                    fontSize: '0.55rem',
                    fontWeight: 700,
                    mb: 1,
                    letterSpacing: '0.08em',
                  }}
                >
                  Project Details
                </Typography>
                <Box sx={{ mb: 2.5 }}>
                  {selectedProject.details.map((detail, i) => (
                    <ModalDetailItem
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                    >
                      <Box className="dot" />
                      <Typography className="text">{detail}</Typography>
                    </ModalDetailItem>
                  ))}
                </Box>

                <Typography
                  variant="subtitle2"
                  sx={{
                    color: '#64748b',
                    textTransform: 'uppercase',
                    fontSize: '0.55rem',
                    fontWeight: 700,
                    mb: 0.5,
                    letterSpacing: '0.08em',
                  }}
                >
                  Technologies
                </Typography>
                <Stack direction="row" spacing={0.5} sx={{ flexWrap: 'wrap', gap: 0.5, mb: 2.5 }}>
                  {selectedProject.tech.map((t, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                    >
                      <Chip
                        label={t}
                        sx={{
                          bgcolor: '#f1f4f8',
                          color: '#4a5568',
                          border: '1px solid #e8ecf0',
                          fontWeight: 500,
                          fontSize: '0.65rem',
                        }}
                      />
                    </motion.div>
                  ))}
                </Stack>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2.5 }}>
                  <Box sx={{ flex: 1 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                      <Typography variant="caption" sx={{ color: '#64748b', fontWeight: 600, fontSize: '0.65rem' }}>Progress</Typography>
                      <Typography variant="caption" sx={{ color: '#1a56db', fontWeight: 700, fontSize: '0.65rem' }}>{selectedProject.progress}%</Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={selectedProject.progress}
                      sx={{
                        height: 4,
                        borderRadius: 4,
                        bgcolor: '#e8ecf0',
                        '& .MuiLinearProgress-bar': {
                          background: selectedProject.gradient || `linear-gradient(90deg, ${selectedProject.color}, ${selectedProject.color}dd)`,
                          borderRadius: 4,
                        },
                      }}
                    />
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', gap: 1.5 }}>
                  <motion.div style={{ width: '100%' }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <PrimaryButton
                      fullWidth
                      endIcon={<LaunchIcon />}
                      sx={{ py: 1.2, fontSize: '0.8rem' }}
                    >
                      View Project
                    </PrimaryButton>
                  </motion.div>
                </Box>
              </motion.div>
            )}
          </ModalContent>
        </Fade>
      </StyledModal>
    </PageWrapper>
  );
}

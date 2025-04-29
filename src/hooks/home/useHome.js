import { useState, useEffect, useMemo } from "react";

function useHome() {
    const allProjects = useMemo(() => [
        {
            id: 1,
            title: "Weather App",
            descripton: "React 기반 날씨 앱 프로젝트",
            image: "https://via.placeholder.com/300x200",
            category: "Web",
            link: "https://example.com/weather-app"
        },
        {
            id: 2,
            title: "Todo List",
            descripton: "리액트 상태관리를 배운 TODO 리스트",
            image:  "https://via.placeholder.com/300x200",
            category: "Web",
            link: "https://example.com/weather-app"
        },
        {
            id: 3,
            title: "Portfolio Site",
            descripton: "나의 작업을 보여주는 포트폴리오",
            image:  "https://via.placeholder.com/300x200",
            category: "Web",
            link: "https://example.com/weather-app"
        },
        {
            id: 4,
            title: "Mobile UI Design",
            descripton: "모바일 앱 UI/UX 디자인",
            image:  "https://via.placeholder.com/300x200",
            category: "Design",
            link: "https://example.com/weather-app"
        }
    ], []);

    const [projects, setProjects] = useState([]);
    const [activeCategory, setActiveCategory] = useState('All');
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setProjects(allProjects);
        }, 500);

        return () => clearTimeout(timer);
    }, [allProjects]);

    useEffect(() => {
        if(activeCategory === 'All') {
            setProjects(allProjects);
        }else {
            const filtered = allProjects.filter(project => project.category === activeCategory);
            setProjects(filtered);
        }
    }, [activeCategory, allProjects]);

    useEffect(() => {
        if(isDarkMode) {
            document.body.classList.add('dark-mode');
        }else {
            document.body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
    };
    
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };
    
    return {
        projects,
        activeCategory,
        handleCategoryChange,
        isDarkMode,
        toggleDarkMode
    };
}

export default useHome;
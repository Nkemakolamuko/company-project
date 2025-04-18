import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import HeroSection from "../components/subcompanies/HeroSection";
import Tabs from "../components/subcompanies/Tabs";
import ProjectGrid from "../components/subcompanies/ProjectGrid";
import slides from "../db/slidesDb";
import Header from "../components/Header";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import ProjectGrids from "../components/subcompanies/ProjectGrids";
import { motion, AnimatePresence } from "framer-motion";

export default function Subcompanies() {
  const { id } = useParams();
  const [activeItem, setActiveItem] = useState(null); // selected subcompany for hero
  const [filteredItems, setFilteredItems] = useState(slides); // items to display in grid
  const [activeTab, setActiveTab] = useState("All");

  useEffect(() => {
    const selected = slides.find((item) => item.id === parseInt(id));
    if (selected) {
      setActiveItem(selected);
      setFilteredItems([selected]); // only show the selected item
      setActiveTab(selected.title);
    } else {
      setFilteredItems(slides);
      setActiveTab("All");
    }
  }, [id]);

  const handleTabClick = (tabTitle) => {
    window.scrollTo({ top: 500, behavior: "smooth" });
    setActiveTab(tabTitle);
    if (tabTitle === "All") {
      setFilteredItems(slides);
    } else {
      const filtered = slides.filter((item) => item.title === tabTitle);
      setFilteredItems(filtered);
      setActiveItem(filtered[0]); // update hero section
    }
  };

  const handleCardClick = (id) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const selected = slides.find((item) => item.id === id);
    if (selected) {
      setActiveItem(selected);
      setActiveTab(selected.title);
      setFilteredItems([selected]);
    }
  };

  // I added these to scroll to the top when we come to this page
  const topRef = useRef(null);
  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [id]);

  return (
    <>
      <Header />

      <div className="bg-white" ref={topRef}>
        {activeItem && (
          <>
            <HeroSection
              title={
                activeTab === "All"
                  ? "Our Solutions which we are happy to show you"
                  : activeItem?.title
              }
              description={
                activeTab === "All"
                  ? "We've made it for many times and grown many businesses. Many more to come."
                  : activeItem?.desc
              }
              img={activeItem?.img}
            />

            <Tabs
              items={slides.map((item) => item.title)}
              activeTab={activeTab}
              onTabClick={handleTabClick}
            />
            <AnimatePresence mode="wait">
              {activeTab === "All" ? (
                <motion.div
                  key="grid"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <ProjectGrid items={filteredItems} setId={handleCardClick} />
                </motion.div>
              ) : (
                <motion.div
                  key="detail"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <ProjectGrids item={activeItem} />
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </div>

      <Newsletter />
      <Footer />
    </>
  );
}

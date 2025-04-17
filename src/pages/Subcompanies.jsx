import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import HeroSection from "../components/subcompanies/HeroSection";
import Tabs from "../components/subcompanies/Tabs";
import ProjectGrid from "../components/subcompanies/ProjectGrid";
import slides from "../db/slidesDb";
import Header from "../components/Header";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

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
    const selected = slides.find((item) => item.id === id);
    if (selected) {
      setActiveItem(selected);
      setActiveTab(selected.title);
      setFilteredItems([selected]);
    }
  };

  return (
    <>
      <Header />

      <div className="bg-gray-50">
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
            />

            <Tabs
              items={slides.map((item) => item.title)}
              activeTab={activeTab}
              onTabClick={handleTabClick}
            />

            <ProjectGrid items={filteredItems} setId={handleCardClick} />
          </>
        )}
      </div>

      <Newsletter />
      <Footer />
    </>
  );
}

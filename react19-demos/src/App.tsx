import { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import Article from "./Projects/P-3/Article";
import BlogForm from "./Projects/P-3/BlogForm";
import Modal from "./Projects/P-3/Modal";
import Navigation from "./Projects/P-3/Navigation";
import PeopleToFollow from "./Projects/P-3/PeopleToFollow";
import { BlogProvider } from "./Projects/P-3/Shared/BlogContext";
import Topics from "./Projects/P-3/Topics";
import Trends from "./Projects/P-3/Trends";
import type { Blog } from "./Projects/P-3/Typescript";

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);

  const openModalForNewBlog = () => {
    setEditingBlog(null);
    setModalOpen(true);
  };
  const openModalForEdit = (blog: Blog) => {
    setEditingBlog(blog);
    setModalOpen(true);
  };

  return (
    <div>
      <BlogProvider>
        <Navigation />
        <div className="flex justify-center">
          <section className="mx-auto p-6">
            <div>
              <button
                onClick={openModalForNewBlog}
                className="ml-[7rem] bg-black flex justify-center items-center text-white px-4 py-2 rounded mb-4"
              >
                Add New Blog <IoMdAddCircle className="ml-[.5rem]" />
              </button>
              <Article onEdit={openModalForEdit} />
              {isModalOpen && (
                <Modal onClose={() => setModalOpen(false)}>
                  <BlogForm
                    existingBlog={editingBlog}
                    onClose={() => setModalOpen(false)}
                  />
                </Modal>
              )}
            </div>
          </section>
          <div className="w-[30%]">
            <PeopleToFollow />
            <Trends />
            <Topics />
          </div>
        </div>
      </BlogProvider>
    </div>
  );
};

export default App;

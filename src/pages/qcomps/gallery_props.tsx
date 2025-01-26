
import GalleryProfile from "./gallery_profile";

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>

      <GalleryProfile
        scientist={{
          name: "Maria Skłodowska-Curie",
          imageId: 'https://i.imgur.com/szV5sdGs.jpg',
          profession: "physicist and chemist",
          awards: "(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)",
          discovery: "polonium (element)"
        }}
        size={4}
      />

      <GalleryProfile
        scientist={{
          name: "Katsuko Saruhashi",
          imageId: 'https://i.imgur.com/YfeOqp2s.jpg',
          profession: "geochemist",
          awards: "(Miyake Prize for geochemistry, Tanaka Prize)",
          discovery: "a method for measuring carbon dioxide in seawater"
        }}
        size={4}
      />
    </div>
    
  );
}


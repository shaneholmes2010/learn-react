import { GalleryProps } from "@/types/gallery";

export default function GalleryProfile(prop : GalleryProps) {
    return (
      <section className="profile">
          <h2>{prop.scientist.name}</h2>
          <img
            className="avatar"
            src={prop.scientist.imageId}
            alt={prop.scientist.name}
            width={70}
            height={70}
          />
          <ul>
            <li>
              <b>Profession: </b>
              {prop.scientist.profession}
            </li>
            <li>
              <b>Awards: {prop.size} </b>
              {prop.scientist.awards}
            </li>
            <li>
              <b>Discovered: </b>
              {prop.scientist.discovery}
            </li>
          </ul>
        </section>
    )
  }
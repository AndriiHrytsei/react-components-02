/* eslint-disable react/prop-types */
import css from "./profile.module.css"
console.log(css);
function Profile ({ username, tag, location, avatar, stats }) {
    return (
        <>
        <div className={css.profile}>
            <div className={css.description}>
                <img
                    src={avatar}
                    alt="User avatar"
                    className={css.avatar}
                />
                <p className={css.name}>{username}</p>
                <p className={css.tag}>@{tag}</p>
                <p className="location">{location}</p>
            </div>

            <ul className="stats">
                <li>
                    <span className="label">Followers </span>
                    <span className="quantity">{stats["followers"]}</span>
                </li>
                <li>
                    <span className="label">Views </span>
                    <span className="quantity">{stats["views"]}</span>
                </li>
                <li>
                    <span className="label">Likes </span>
                    <span className="quantity">{stats["likes"]}</span>
                </li>
            </ul>
        </div>
        </>
    )
}

export default Profile
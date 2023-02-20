import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";
import {
  Profiles,
  ProfileHeader,
  ProfileLink,
  ProfBtn,
} from "./profilePage.style";
import { useNavigate } from "react-router-dom";
export const ProfilePage = () => {
  const navigate =useNavigate()
  const { t } = useTranslation();
  return (
    <Profiles className="container">
      <ProfileHeader>
        <ProfileLink to="profile">
          <ProfBtn>1</ProfBtn> {t("header.profil")}
        </ProfileLink>
        <ProfileLink to="security">
          <ProfBtn>2</ProfBtn> {t("main.security")}
        </ProfileLink>
        <ProfileLink to="settings">
          <ProfBtn>3</ProfBtn> {t("main.settings")}
        </ProfileLink>
      </ProfileHeader>
      <button className="btn btn-danger mt-4 ms-5" onClick={() =>navigate("/") } >&lArr;  Home</button>
      <Outlet />
    </Profiles>
  );
};

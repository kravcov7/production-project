import { BugButton } from "app/providers/ErrorBoundary";
import { useTranslation } from "react-i18next";
import { FC } from "react";

const MainPage: FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      {/* <BugButton /> */}
      {t("Главная страница")}
    </div>
  );
};

export default MainPage;

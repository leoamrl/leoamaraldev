// @ts-nocheck
import "../sass/style.scss";
import "./modules/noise";
import { initMenu } from "./modules/menu";
import { initMask } from "./modules/mask";
import { initContact } from "./modules/contact";
import { initAnimations, initServicesAnimations } from "./modules/animations";

initAnimations()
initMenu()
initMask()
initContact()
initServicesAnimations()
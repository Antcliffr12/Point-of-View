import page from './documents/page-schema';
import project from './documents/project-schema';
import hero from './objects/hero-schema';
import settings from './singletons/settings';
import card from './objects/card-schema';
import accordion from './objects/accordion-schema';
import sponsors from './objects/sponsors-schema';
import services from './objects/services-schema';

const schemas = [settings, project, page, hero, card, sponsors, services, accordion];

export default schemas
import dayjs from "dayjs";
import relativetime from "dayjs/plugin/relativeTime";
import "dayjs/locale/en";

dayjs.locale("en");

dayjs.extend(relativetime);

export default dayjs;

import _ from "lodash";
import { useState } from "react";

function useComp() {
  const [cid] = useState(_.uniqueId("comp-"));
  const withRootElId = (nestedItemName?: string) =>
    `jg-${cid}${nestedItemName ? `-${nestedItemName}` : ""}`;
  return { cid, withRootElId };
}
export default useComp;

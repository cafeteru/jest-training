import { Species } from './species';
import { VersionGroupDetail } from './version-group-detail';

export interface Move {
  move: Species;
  version_group_details: VersionGroupDetail[];
}

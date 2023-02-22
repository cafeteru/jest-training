import { GenerationI } from './generations/generation-i';
import { GenerationIi } from './generations/generation-ii';
import { GenerationIii } from './generations/generation-iii';
import { GenerationIv } from './generations/generation-iv';
import { GenerationV } from './generations/generation-v';
import { GenerationVii } from './generations/generation-vii';
import { GenerationViii } from './generations/generation-viii';
import { Home } from './home';

export interface Versions {
  'generation-i': GenerationI;
  'generation-ii': GenerationIi;
  'generation-iii': GenerationIii;
  'generation-iv': GenerationIv;
  'generation-v': GenerationV;
  'generation-vi': { [key: string]: Home };
  'generation-vii': GenerationVii;
  'generation-viii': GenerationViii;
}

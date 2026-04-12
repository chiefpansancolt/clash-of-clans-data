/** A single challenge task type that can appear in Season Pass challenges. */
export interface SeasonPassChallenge {
  id: string;
  /** Human-readable task description, e.g. "Start any building upgrade". */
  name: string;
  /** Clarifying notes and edge cases for this challenge type. */
  notes: string[];
  /** Path to the challenge icon image. */
  image: string;
}

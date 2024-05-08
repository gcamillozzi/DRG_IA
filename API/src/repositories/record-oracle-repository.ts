export interface RecordOracleRepository{
  recordOracle(id, registro): Promise<string | null>
  getSequence(): Promise<number>
}
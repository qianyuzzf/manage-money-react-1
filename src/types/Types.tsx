type TagsType = { id: number, name: string }

type RecordItems = {
  tags: TagsType[]
  notes: string
  type: '-' | '+'
  amount: number,
  time: string
  createAt?: string
}

export type {TagsType, RecordItems};

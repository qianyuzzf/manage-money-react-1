type TagsType = { id: number, name: string }

type RecordItems = {
  tags: TagsType[]
  notes: string
  type: '-' | '+'
  amount: string,
  time: string
  createAt?: string
}

export type {TagsType, RecordItems};

type TagsType = { id: number, name: string }

type RecordItems = {
  tags: TagsType[]
  notes: string
  type: '-' | '+'
  amount: number
  createAt?: string
}

export type {TagsType, RecordItems};

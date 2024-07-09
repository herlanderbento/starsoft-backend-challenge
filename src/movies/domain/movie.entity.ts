import { AggregateRoot, EntityID, Optional } from '@/shared/domain';

export type MovieProps = {
  title: string;
  description?: string | null;
  director: string;
  releaseYear: number;
  rating: number;
  createdAt?: Date;
  updatedAt?: Date;
};

export class Movie extends AggregateRoot<MovieProps> {
  constructor(props: MovieProps, id?: EntityID) {
    super(props, id);
  }

  get title() {
    return this.props.title;
  }

  get description() {
    return this.props.description;
  }

  get director() {
    return this.props.director;
  }

  get releaseYear() {
    return this.props.releaseYear;
  }

  get rating() {
    return this.props.rating;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }

  static create(
    props: Optional<MovieProps, 'createdAt' | 'updatedAt'>,
    id?: EntityID,
  ) {
    return new Movie(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
        updatedAt: props.updatedAt ?? new Date(),
      },
      id,
    );
  }

  toJSON() {
    return {
      id: this.id.toValue(),
      title: this.title,
      description: this.description,
      director: this.director,
      releaseYear: this.releaseYear,
      rating: this.rating,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}

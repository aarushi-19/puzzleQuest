exports.up = (pgm) => {
  // Users
  pgm.createTable("users", {
    id: {
      type: "uuid",
      primaryKey: true,
      default: pgm.func("gen_random_uuid()"),
    },
    name: {
      type: "varchar(100)",
      notNull: true,
    },
    email: {
      type: "varchar(255)",
      notNull: true,
      unique: true,
    },
    password_hash: {
      type: "text",
      notNull: true,
    },
    created_at: {
      type: "timestamptz",
      notNull: true,
      default: pgm.func("CURRENT_TIMESTAMP"),
    },
  });

  // Gifts
  pgm.createTable("gifts", {
    id: {
      type: "uuid",
      primaryKey: true,
      default: pgm.func("gen_random_uuid()"),
    },
    user_id: {
      type: "uuid",
      notNull: true,
      references: "users",
      onDelete: "CASCADE",
    },
    gift_title: {
      type: "varchar(255)",
      notNull: true,
    },
    recipient_name: {
      type: "varchar(100)",
      notNull: true,
    },
    occasion: {
      type: "varchar(100)",
      notNull: true,
    },
    cover_image_url: {
      type: "text",
    },
    published: {
      type: "boolean",
      notNull: true,
      default: false,
    },
    created_at: {
      type: "timestamptz",
      notNull: true,
      default: pgm.func("CURRENT_TIMESTAMP"),
    },
  });

  // Memories
  pgm.createTable("memories", {
    id: {
      type: "uuid",
      primaryKey: true,
      default: pgm.func("gen_random_uuid()"),
    },
    gift_id: {
      type: "uuid",
      notNull: true,
      references: "gifts",
      onDelete: "CASCADE",
    },
    title: {
      type: "varchar(255)",
      notNull: true,
    },
    story: {
      type: "text",
      notNull: true,
      default: "",
    },
    image_url: {
      type: "text",
    },
    position: {
      type: "integer",
      notNull: true,
      default: 0,
    },
    created_at: {
      type: "timestamptz",
      notNull: true,
      default: pgm.func("CURRENT_TIMESTAMP"),
    },
  });

  // Puzzles
  pgm.createTable("puzzles", {
    id: {
      type: "uuid",
      primaryKey: true,
      default: pgm.func("gen_random_uuid()"),
    },
    memory_id: {
      type: "uuid",
      notNull: true,
      unique: true,
      references: "memories",
      onDelete: "CASCADE",
    },
    type: {
      type: "varchar(50)",
      notNull: true,
    },
    config: {
      type: "jsonb",
      notNull: true,
      default: "{}",
    },
  });

  // Letters
  pgm.createTable("letters", {
    id: {
      type: "uuid",
      primaryKey: true,
      default: pgm.func("gen_random_uuid()"),
    },
    gift_id: {
      type: "uuid",
      notNull: true,
      unique: true,
      references: "gifts",
      onDelete: "CASCADE",
    },
    title: {
      type: "varchar(255)",
      notNull: true,
    },
    message: {
      type: "text",
      notNull: true,
    },
    signature: {
      type: "varchar(255)",
    },
    paper_style: {
      type: "varchar(100)",
    },
    envelope_style: {
      type: "varchar(100)",
    },
    wax_seal: {
      type: "varchar(100)",
    },
    font: {
      type: "varchar(100)",
    },
    created_at: {
      type: "timestamptz",
      notNull: true,
      default: pgm.func("CURRENT_TIMESTAMP"),
    },
  });

  // Gift progress
  pgm.createTable("gift_progress", {
    id: {
      type: "uuid",
      primaryKey: true,
      default: pgm.func("gen_random_uuid()"),
    },
    gift_id: {
      type: "uuid",
      notNull: true,
      references: "gifts",
      onDelete: "CASCADE",
    },
    session_id: {
      type: "varchar(255)",
      notNull: true,
    },
    current_memory_id: {
      type: "uuid",
      references: "memories",
      onDelete: "SET NULL",
    },
    completed: {
      type: "boolean",
      notNull: true,
      default: false,
    },
    updated_at: {
      type: "timestamptz",
      notNull: true,
      default: pgm.func("CURRENT_TIMESTAMP"),
    },
  });

  pgm.addConstraint("gift_progress", "unique_gift_session", {
    unique: ["gift_id", "session_id"],
  });

  // Helpful indexes
  pgm.createIndex("gifts", "user_id");
  pgm.createIndex("memories", ["gift_id", "position"]);
  pgm.createIndex("gift_progress", "gift_id");
};

exports.down = (pgm) => {
  pgm.dropTable("gift_progress");
  pgm.dropTable("letters");
  pgm.dropTable("puzzles");
  pgm.dropTable("memories");
  pgm.dropTable("gifts");
  pgm.dropTable("users");
};